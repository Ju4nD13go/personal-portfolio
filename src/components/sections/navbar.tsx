"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { Monogram } from "@/components/monogram";
import { cn } from "@/lib/utils";
import { useI18n, type Lang } from "@/lib/i18n/provider";
import { useTheme } from "@/lib/theme/provider";

const LANGS: Lang[] = ["es", "en"];

function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.nav.languageAria}
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-border bg-background p-0.5",
        className
      )}
    >
      {LANGS.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            aria-label={code === "es" ? "Español" : "English"}
            onClick={() => setLang(code)}
            className={cn(
              "inline-flex h-6 items-center justify-center rounded-full px-2 text-xs font-medium transition-colors",
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();

  const next = theme === "dark" ? "light" : "dark";
  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? t.nav.themeToLight : t.nav.themeToDark}
      onClick={() => setTheme(next)}
      className={cn(
        "transition-transform duration-200 hover:scale-[1.03]",
        className
      )}
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}

export function Navbar() {
  const { content, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/85 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "border-transparent bg-background/50 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <Monogram />
          <span className="hidden font-heading text-sm font-semibold tracking-[-0.01em] sm:inline">
            {content.profile.name}
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {content.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-sky-400 to-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden transition-transform duration-200 hover:scale-[1.03] sm:inline-flex"
          >
            <a
              href={content.profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </Button>
          <ThemeToggle className="hidden sm:inline-flex" />
          <LanguageToggle className="hidden sm:inline-flex" />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border/60 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {content.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle className="mt-4 sm:hidden" />
          <LanguageToggle className="mt-4 sm:hidden" />
        </div>
      )}
    </header>
  );
}