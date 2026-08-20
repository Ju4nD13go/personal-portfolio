"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ProfileImage } from "@/components/profile-image";
import { Spotlight } from "@/components/spotlight";
import { useI18n } from "@/lib/i18n/provider";

export function About() {
  const { content, t } = useI18n();

  return (
    <section id="about" className="scroll-mt-16 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-medium text-sky-400">
            {t.about.title}
          </span>
          <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
            {content.about.heading}
          </h2>
        </Reveal>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
          <Reveal className="mx-auto w-full max-w-sm lg:mx-0 lg:sticky lg:top-24">
            <Spotlight className="h-full rounded-2xl">
              <Card className="h-full">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <ProfileImage
                    sizes="160px"
                    className="mx-auto size-36 sm:size-40"
                  />
                  <div className="mt-2 flex flex-col items-center">
                    <CardTitle className="text-lg">
                      {content.profile.name}
                    </CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {content.profile.title} · {content.profile.role}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-2.5 px-5 pb-5">
                  {content.about.highlights.map(
                    ({ label, value, icon: Icon }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2.5"
                      >
                        <Icon className="size-4 shrink-0 text-sky-400" />
                        <span className="text-sm">
                          <span className="text-muted-foreground">
                            {label}:{" "}
                          </span>
                          <span className="font-medium">{value}</span>
                        </span>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>
            </Spotlight>
          </Reveal>
          <Reveal
            delay={0.1}
            className="flex flex-col gap-4 text-pretty text-base leading-relaxed text-muted-foreground"
          >
            <p>{content.about.intro}</p>
            <p>{content.about.detail}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}