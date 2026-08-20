"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { Code2, GraduationCap, MapPin, type LucideIcon } from "lucide-react";

import { dictionaries, type Dictionary, type Lang } from "@/lib/i18n/dictionaries";
import {
  profile,
  projects,
  skillCategories,
  type Project,
  type SkillCategory,
} from "@/lib/data";

const STORAGE_KEY = "lang";

export type { Lang };

export type Content = {
  profile: {
    name: string;
    title: string;
    role: string;
    location: string;
    bio: string;
    email: string;
    links: { github: string; linkedin: string };
  };
  navLinks: { label: string; href: string }[];
  about: {
    title: string;
    heading: string;
    intro: string;
    detail: string;
    highlights: { label: string; value: string; icon: LucideIcon }[];
  };
  projects: (Omit<Project, "description" | "status"> & {
    description: string;
    status: string;
  })[];
  skillCategories: (Omit<SkillCategory, "name"> & { name: string })[];
  contact: { headline: string; description: string };
};

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
  content: Content;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readLangFromBrowser(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // localStorage unavailable (e.g. privacy mode); fall through to detection.
  }
  const browserLang = typeof navigator !== "undefined" ? navigator.language : "";
  return browserLang.toLowerCase().startsWith("es") ? "es" : "en";
}

type LangStore = {
  snapshot: Lang;
  listeners: Set<() => void>;
};

let store: LangStore | null = null;

function getStore(): LangStore {
  if (!store) {
    store = {
      snapshot: readLangFromBrowser(),
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

function getSnapshot(): Lang {
  return getStore().snapshot;
}

function getServerSnapshot(): Lang {
  return "en";
}

function persistLang(next: Lang) {
  const current = getStore();
  if (current.snapshot !== next) {
    current.snapshot = next;
    for (const listener of current.listeners) listener();
  }
  document.documentElement.lang = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage unavailable; the choice still applies for this session.
  }
}

function buildContent(lang: Lang): Content {
  const d = dictionaries[lang];

  return {
    profile: {
      name: profile.name,
      title: d.profile.title,
      role: d.profile.role,
      location: profile.location,
      bio: d.profile.bio,
      email: profile.email,
      links: profile.links,
    },
    navLinks: [
      { label: d.navLinks.about, href: "#about" },
      { label: d.navLinks.projects, href: "#projects" },
      { label: d.navLinks.skills, href: "#skills" },
      { label: d.navLinks.contact, href: "#contact" },
    ],
    about: {
      title: d.about.title,
      heading: d.about.heading,
      intro: d.about.intro,
      detail: d.about.detail,
      highlights: [
        {
          label: d.about.highlights.roleLabel,
          value: d.about.highlights.roleValue,
          icon: GraduationCap,
        },
        {
          label: d.about.highlights.focusLabel,
          value: d.about.highlights.focusValue,
          icon: Code2,
        },
        {
          label: d.about.highlights.basedLabel,
          value: profile.location,
          icon: MapPin,
        },
      ],
    },
    projects: [
      ...projects.map((project) => ({
        ...project,
        description: d.projects.items[project.id],
        status: d.projects.status,
      })),
    ],
    skillCategories: [
      ...skillCategories.map((category) => ({
        ...category,
        name: d.skills.categories[category.id],
      })),
    ],
    contact: {
      headline: d.contact.headline,
      description: d.contact.description,
    },
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeStore,
    getSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    persistLang(next);
  }, []);

  const t = dictionaries[lang];
  const content = useMemo(() => buildContent(lang), [lang]);
  const value = useMemo(
    () => ({ lang, setLang, t, content }),
    [lang, setLang, t, content]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return context;
}