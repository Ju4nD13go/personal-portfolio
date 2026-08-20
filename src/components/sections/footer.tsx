"use client";

import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/lib/i18n/provider";

export function Footer() {
  const { content, t } = useI18n();

  return (
    <footer className="mt-8">
      <Separator />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {content.profile.name}.{" "}
          {t.footer.allRightsReserved}
        </p>
        <p className="text-xs text-muted-foreground/70">
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}