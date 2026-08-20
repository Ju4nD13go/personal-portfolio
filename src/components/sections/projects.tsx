"use client";

import { ArrowUpRight, CircleDot, Globe } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Spotlight } from "@/components/spotlight";
import { techLogos, type Project } from "@/lib/data";
import { useI18n } from "@/lib/i18n/provider";

function ProjectPreview({ project }: { project: Project }) {
  const Icon = project.preview.icon;
  return (
    <div className="overflow-hidden border-b border-border/60 bg-muted/40">
      <div className="flex items-center gap-1.5 border-b border-border/40 bg-background/60 px-4 py-2.5">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#FF5F57]" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#FEBC2E]" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 flex-1 truncate rounded-md bg-muted/70 px-3 py-1 text-xs text-muted-foreground">
          {project.preview.url}
        </span>
      </div>
      <div
        aria-hidden="true"
        className={`relative flex h-36 items-center justify-center overflow-hidden bg-linear-to-br ${project.preview.gradient}`}
      >
        <div className="absolute -right-8 -top-10 size-36 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-12 -left-8 size-36 rounded-full bg-white/10 blur-2xl" />
        <Icon className="size-16 text-white/90 drop-shadow-lg" />
      </div>
    </div>
  );
}

export function Projects() {
  const { content, t } = useI18n();

  return (
    <section id="projects" className="scroll-mt-16 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-medium text-sky-400">
            {t.projects.title}
          </span>
          <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
            {t.projects.heading}
          </h2>
          <p className="max-w-2xl text-pretty text-muted-foreground">
            {t.projects.subtitle}
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {content.projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <Spotlight
                data-cursor="hover"
                className="h-full rounded-2xl"
              >
                <Card className="relative h-full pt-0 transition-all duration-300 group-hover/spotlight:-translate-y-1 group-hover/spotlight:shadow-2xl group-hover/spotlight:shadow-indigo-500/10 group-hover/spotlight:ring-sky-400/30">
                  <ProjectPreview project={project} />
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className="gap-1 text-muted-foreground"
                      >
                        <CircleDot className="size-3 animate-pulse text-amber-500" />
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => {
                        const logo = techLogos[tech];
                        return (
                          <Badge
                            key={tech}
                            variant="secondary"
                            title={tech}
                            className="h-6 gap-1.5 rounded-full px-2.5 text-muted-foreground [&>svg]:size-3.5!"
                          >
                            {logo ? (
                              <logo.icon
                                aria-hidden="true"
                                style={{ color: logo.color }}
                              />
                            ) : null}
                            {tech}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    {project.demoUrl ? (
                      <Button asChild variant="default" size="sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="size-3.5" />
                          {t.projects.liveSite}
                          <ArrowUpRight data-icon="inline-end" />
                        </a>
                      </Button>
                    ) : null}
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="size-3.5" />
                        {t.projects.viewOnGitHub}
                        <ArrowUpRight data-icon="inline-end" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}