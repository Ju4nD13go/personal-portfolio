"use client";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { useI18n } from "@/lib/i18n/provider";

export function Contact() {
  const { content, t } = useI18n();

  return (
    <section id="contact" className="scroll-mt-16 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-medium text-sky-400">
            {t.contact.title}
          </span>
          <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
            {content.contact.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 w-full max-w-xl">
          <Card className="flex w-full flex-col items-center text-center">
            <CardHeader className="flex w-full flex-col items-center text-center">
              <CardTitle className="text-lg">{content.profile.name}</CardTitle>
              <CardDescription className="mx-auto max-w-md text-balance">
                {content.contact.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Button
                asChild
                size="lg"
                className="transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-95"
              >
                <a href={`mailto:${content.profile.email}`}>
                  <Mail data-icon="inline-start" />
                  {content.profile.email}
                </a>
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="transition-all duration-200 hover:scale-[1.03] active:scale-95"
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
                <Button
                  asChild
                  variant="outline"
                  className="transition-all duration-200 hover:scale-[1.03] active:scale-95"
                >
                  <a
                    href={content.profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="size-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}