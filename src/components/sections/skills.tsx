"use client";

import { useCallback, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { Spotlight } from "@/components/spotlight";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 56 : -56,
    scale: 0.98,
  }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -56 : 56,
    scale: 0.98,
  }),
};

export function Skills() {
  const { content, t } = useI18n();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const count = content.skillCategories.length;

  const goTo = useCallback(
    (target: number) => {
      const next = (target + count) % count;
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index, count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(count - 1);
    }
  };

  const active = content.skillCategories[index];

  return (
    <section id="skills" className="scroll-mt-16 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-medium text-sky-400">
            {t.skills.title}
          </span>
          <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
            {t.skills.heading}
          </h2>
          <p className="max-w-2xl text-pretty text-muted-foreground">
            {t.skills.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 w-full">
          <div
            role="tablist"
            aria-label={t.skills.stackCategoriesAria}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {content.skillCategories.map((category, i) => {
              const Icon = category.icon;
              const selected = i === index;
              return (
                <button
                  key={category.name}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="skill-carousel"
                  onClick={() => goTo(i)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300",
                    selected
                      ? "bg-foreground text-background shadow-lg shadow-foreground/10"
                      : "text-muted-foreground ring-1 ring-border hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {category.name}
                </button>
              );
            })}
          </div>

          <div
            id="skill-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label={t.skills.carouselAria}
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="mx-auto w-full max-w-5xl outline-none"
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={active.name}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: EASE }}
                role="group"
                aria-roledescription="slide"
                aria-label={t.skills.slideAria(active.name, index + 1, count)}
                className="w-full"
              >
                <Spotlight className="h-full rounded-2xl">
                  <Card className="h-full rounded-2xl">
                    <CardContent className="flex h-full flex-col gap-8 p-8 sm:p-10 md:flex-row md:items-center md:gap-10 lg:p-12">
                      <div className="flex flex-row items-center gap-4 md:w-60 md:shrink-0 md:flex-col md:items-start md:gap-5">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                          <active.icon className="size-7" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium sm:text-3xl">
                            {active.name}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {active.skills.length}{" "}
                            {active.skills.length === 1
                              ? t.skills.technology
                              : t.skills.technologies}
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex flex-wrap content-start gap-2.5"
                        aria-label={t.skills.categoryTechnologiesAria(
                          active.name
                        )}
                      >
                        {active.skills.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            title={skill.name}
                            data-cursor="hover"
                            className="h-8 gap-2 rounded-full px-4 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground [&>svg]:size-5!"
                          >
                            <skill.icon
                              aria-hidden="true"
                              style={{ color: skill.color }}
                            />
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Spotlight>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={prev}
                aria-label={t.skills.previousSlideAria}
                className="flex size-10 items-center justify-center rounded-full ring-1 ring-border transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-1.5">
                {content.skillCategories.map((category, i) => (
                  <button
                    key={category.name}
                    type="button"
                    aria-label={t.skills.goToSlideAria(i + 1, category.name)}
                    aria-current={i === index ? "true" : undefined}
                    onClick={() => goTo(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                      i === index
                        ? "w-6 bg-sky-400"
                        : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    )}
                  />
                ))}
              </div>

              <span
                aria-live="polite"
                className="min-w-10 text-center text-sm tabular-nums text-muted-foreground"
              >
                {index + 1} / {count}
              </span>

              <button
                type="button"
                onClick={next}
                aria-label={t.skills.nextSlideAria}
                className="flex size-10 items-center justify-center rounded-full ring-1 ring-border transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
