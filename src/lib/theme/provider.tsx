"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readThemeFromBrowser(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable (e.g. privacy mode); fall through to detection.
  }
  return typeof window.matchMedia !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

type ThemeStore = {
  snapshot: Theme;
  listeners: Set<() => void>;
};

let store: ThemeStore | null = null;

function getStore(): ThemeStore {
  if (!store) {
    store = {
      snapshot: readThemeFromBrowser(),
      listeners: new Set(),
    };
  }
  return store;
}

function subscribeStore(callback: () => void): () => void {
  const current = getStore();
  current.listeners.add(callback);
  return () => current.listeners.delete(callback);
}

function getSnapshot(): Theme {
  return getStore().snapshot;
}

function getServerSnapshot(): Theme {
  return "dark";
}

function persistTheme(next: Theme) {
  const current = getStore();
  if (current.snapshot !== next) {
    current.snapshot = next;
    for (const listener of current.listeners) listener();
  }
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage unavailable; the choice still applies for this session.
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeStore,
    getSnapshot,
    getServerSnapshot
  );

  const setTheme = useCallback((next: Theme) => {
    persistTheme(next);
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}