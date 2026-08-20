import type { LucideIcon } from "lucide-react";
import { CalendarClock, Droplet, ScrollText } from "lucide-react";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  FiCloud,
  FiCode,
  FiServer,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiAngular,
  SiCelery,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiIonic,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const profile = {
  name: "Juan Diego Meza",
  location: "Cali, Colombia",
  email: "juandiegomeza.dev@gmail.com",
  links: {
    github: "https://github.com/Ju4nD13go",
    linkedin: "https://linkedin.com/in/juan-diego-meza-139291258",
  },
};

export type TechLogo = {
  icon: IconType;
  color: string;
};

export const techLogos: Record<string, TechLogo> = {
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: SiOpenjdk, color: "#E76F00" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Django: { icon: SiDjango, color: "#44B78B" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Flask: { icon: SiFlask, color: "#E2E8F0" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Ionic: { icon: SiIonic, color: "#3880FF" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "Docker Compose": { icon: SiDocker, color: "#2496ED" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  Celery: { icon: SiCelery, color: "#37814A" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "shadcn/ui": { icon: SiShadcnui, color: "#CBD5E1" },
  JWT: { icon: SiJsonwebtokens, color: "#00ACC1" },
};

export type ProjectId = "gota-azul" | "agenda-saas" | "merito-tracker";

export type Project = {
  id: ProjectId;
  title: string;
  technologies: string[];
  url: string;
  demoUrl?: string;
  preview: {
    url: string;
    gradient: string;
    icon: LucideIcon;
  };
};

export const projects: Project[] = [
  {
    id: "gota-azul",
    title: "Gota Azul",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Ionic",
      "Flask",
      "MySQL",
      "JWT",
    ],
    url: "https://github.com/Ju4nD13go/Gota-Azul-Web",
    demoUrl: "https://gota-azul-bn19z197k-ju4nd13gos-projects.vercel.app",
    preview: {
      url: "gota-azul.app",
      gradient: "from-sky-500/25 via-cyan-400/15 to-blue-600/25",
      icon: Droplet,
    },
  },
  {
    id: "agenda-saas",
    title: "Agenda SaaS",
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Docker Compose",
    ],
    url: "https://github.com/Ju4nD13go/Agenda-Saas",
    preview: {
      url: "agenda-saas.app",
      gradient: "from-indigo-500/25 via-violet-500/15 to-purple-600/25",
      icon: CalendarClock,
    },
  },
  {
    id: "merito-tracker",
    title: "Mérito Tracker",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    url: "https://github.com/Ju4nD13go/merito-tracker",
    demoUrl: "https://merito-tracker.pages.dev/",
    preview: {
      url: "merito-tracker.pages.dev",
      gradient: "from-emerald-500/25 via-green-600/15 to-teal-600/25",
      icon: ScrollText,
    },
  },
];

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export type SkillCategoryId = "backend" | "frontend" | "mobile" | "devops";

export type SkillCategory = {
  id: SkillCategoryId;
  icon: IconType;
  skills: Skill[];
};

const toSkill = (name: string): Skill => {
  const entry = techLogos[name];
  if (!entry) {
    throw new Error(`No tech logo registered for "${name}"`);
  }
  return { name, icon: entry.icon, color: entry.color };
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    icon: FiServer,
    skills: ["Python", "Java", "Node.js", "Django", "FastAPI", "Flask"].map(
      toSkill
    ),
  },
  {
    id: "frontend",
    icon: FiCode,
    skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript"].map(
      toSkill
    ),
  },
  {
    id: "mobile",
    icon: FiSmartphone,
    skills: ["Ionic"].map(toSkill),
  },
  {
    id: "devops",
    icon: FiCloud,
    skills: ["MySQL", "PostgreSQL", "Docker", "AWS", "Redis", "Celery"].map(
      toSkill
    ),
  },
];