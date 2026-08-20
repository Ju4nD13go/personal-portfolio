"use client";

import Image from "next/image";
import { motion } from "motion/react";

import profileImg from "@/img/profile.jpeg";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";

type ProfileImageProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
  float?: boolean;
};

export function ProfileImage({
  className,
  sizes,
  priority = false,
  float = false,
}: ProfileImageProps) {
  const { t } = useI18n();
  const floatAnimation = float ? { y: [0, -12, 4] } : undefined;
  const floatTransition = float
    ? ({ duration: 7, ease: "easeInOut", repeat: Infinity } as const)
    : undefined;

  return (
    <motion.div
      className={cn("relative", className)}
      animate={floatAnimation}
      transition={floatTransition}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-linear-to-tr from-sky-400 via-indigo-400 to-violet-400 opacity-40 blur-2xl"
      />
      <div className="relative size-full rounded-full bg-linear-to-tr from-sky-400 via-indigo-400 to-violet-400 p-1 shadow-2xl shadow-sky-500/20">
        <div className="relative size-full overflow-hidden rounded-full bg-card">
          <Image
            src={profileImg}
            alt={t.profile.profileImageAlt}
            fill
            priority={priority}
            quality={85}
            sizes={sizes}
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
