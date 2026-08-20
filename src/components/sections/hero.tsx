"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { useI18n } from "@/lib/i18n/provider";

export function Hero() {
  const { content, t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden scroll-mt-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl animate-float-slow" />
        <div className="absolute right-[-6rem] top-1/3 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl animate-float-slower" />
        <div className="absolute bottom-[-6rem] left-[-5rem] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl animate-float-slow" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-16 text-center sm:pt-20 lg:pb-32 lg:pt-28">
        <Stagger className="flex flex-col items-center">
          <StaggerItem>
            <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1">
              <MapPin className="size-3 text-sky-400" />
              {content.profile.location}
            </Badge>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-6 text-4xl font-semibold text-balance sm:text-6xl lg:text-7xl">
              <span className="bg-linear-to-r from-sky-400 via-indigo-400 to-violet-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                {content.profile.name}
              </span>
            </h1>
          </StaggerItem>
            <StaggerItem>
              <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
                <span className="font-semibold text-foreground">
                  {content.profile.title}
                </span>
                <span aria-hidden="true"> · </span>
                {content.profile.role}
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.profile.bio}
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-95"
                >
                  <a href="#projects">
                    {t.hero.viewProjects}
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-95"
                >
                  <a href="#contact">
                    <Mail data-icon="inline-start" />
                    {t.hero.contact}
                  </a>
                </Button>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-6 flex items-center gap-2">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  aria-label={t.hero.githubAria}
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <a
                    href={content.profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  aria-label={t.hero.linkedinAria}
                  className="text-muted-foreground transition-transform duration-200 hover:scale-110 hover:text-[#0A66C2]"
                >
                  <a
                    href={content.profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="size-4" />
                  </a>
                </Button>
              </div>
            </StaggerItem>
          </Stagger>
      </div>
    </section>
  );
}