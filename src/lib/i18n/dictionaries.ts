import type { ProjectId, SkillCategoryId } from "@/lib/data";

export type Lang = "es" | "en";

export type Dictionary = {
  profile: {
    title: string;
    role: string;
    bio: string;
    profileImageAlt: string;
  };
  nav: {
    languageAria: string;
    openMenu: string;
    closeMenu: string;
    themeToDark: string;
    themeToLight: string;
  };
  navLinks: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    viewProjects: string;
    contact: string;
    githubAria: string;
    linkedinAria: string;
  };
  about: {
    title: string;
    heading: string;
    intro: string;
    detail: string;
    highlights: {
      roleLabel: string;
      roleValue: string;
      focusLabel: string;
      focusValue: string;
      basedLabel: string;
    };
  };
  projects: {
    title: string;
    heading: string;
    subtitle: string;
    statuses: Record<ProjectId, string>;
    liveSite: string;
    viewOnGitHub: string;
    items: Record<ProjectId, string>;
  };
  skills: {
    title: string;
    heading: string;
    subtitle: string;
    stackCategoriesAria: string;
    carouselAria: string;
    technology: string;
    technologies: string;
    previousSlideAria: string;
    nextSlideAria: string;
    categories: Record<SkillCategoryId, string>;
    slideAria: (name: string, index: number, count: number) => string;
    categoryTechnologiesAria: (name: string) => string;
    goToSlideAria: (index: number, name: string) => string;
  };
  contact: {
    title: string;
    headline: string;
    description: string;
  };
  footer: {
    allRightsReserved: string;
    builtWith: string;
  };
};

export const dictionaries: Record<Lang, Dictionary> = {
  es: {
    profile: {
      title: "Desarrollador Full Stack",
      role: "Ingeniero de Sistemas",
      bio: "Ingeniero de sistemas y desarrollador full stack que construye aplicaciones web y móviles confiables y centradas en las personas. Actualmente lidero Gota Azul, una aplicación de monitoreo de consumo de agua en tiempo real para hogares colombianos.",
      profileImageAlt:
        "Retrato de Juan Diego Meza, desarrollador full stack",
    },
    nav: {
      languageAria: "Cambiar idioma",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      themeToDark: "Cambiar a modo oscuro",
      themeToLight: "Cambiar a modo claro",
    },
    navLinks: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      viewProjects: "Ver Proyectos",
      contact: "Contacto",
      githubAria: "Perfil de GitHub",
      linkedinAria: "Perfil de LinkedIn",
    },
    about: {
      title: "Sobre mí",
      heading: "Ingeniería de sistemas, pasión full stack",
      intro:
        "Soy ingeniero de sistemas recién graduado de Cali, Colombia, apasionado por el full stack — desde diseñar APIs y modelos de datos limpios hasta crear interfaces cuidadosas.",
      detail:
        "Actualmente lidero el desarrollo de Gota Azul, una aplicación web y móvil que ayuda a los hogares colombianos a monitorear su consumo de agua en tiempo real. Disfruto trabajar a lo largo de todo el stack y convertir problemas complejos en productos simples y confiables.",
      highlights: {
        roleLabel: "Rol",
        roleValue: "Ingeniero de Sistemas",
        focusLabel: "Enfoque",
        focusValue: "Desarrollo Full Stack",
        basedLabel: "Ubicación",
      },
    },
    projects: {
      title: "Proyectos",
      heading: "Lo que estoy construyendo",
      subtitle:
        "Una selección de proyectos que estoy desarrollando activamente — desde monitoreo de agua hasta plataformas de agendamiento.",
      statuses: {
        ["gota-azul"]: "En vivo",
        ["agenda-saas"]: "En desarrollo",
        ["merito-tracker"]: "En línea",
      },
      liveSite: "Sitio en vivo",
      viewOnGitHub: "Ver en GitHub",
      items: {
        ["gota-azul"]:
          "Monitoreo de consumo de agua en tiempo real para hogares colombianos. Incluye autenticación basada en roles, gestión de artefactos IoT, comparación con los estándares de la OMS y exportación a Excel/PDF. Frontend web en Next.js con una app móvil en Ionic, impulsada por una API de Python con Flask.",
        ["agenda-saas"]:
          "Plataforma de reservas y agendamiento en línea para pymes de servicios. Incluye reservas en línea, recordatorios automáticos con Celery y una arquitectura de monorepo construida con Django, PostgreSQL, Redis y Docker Compose.",
        ["merito-tracker"]:
          "Explorador de vacantes para el concurso de méritos de la Procuraduría 2026. Filtra más de 370 cargos indexados, compara tu perfil con los requisitos y sigue las fechas clave de tu proceso — 100% local en el navegador, sin backend ni telemetría. Arquitectura estática con dominio puro en TypeScript y despliegue automático a Cloudflare Pages.",
      },
    },
    skills: {
      title: "Habilidades",
      heading: "Herramientas con las que trabajo",
      subtitle:
        "Tecnologías que uso para llevar productos de la idea a producción, a lo largo de todo el stack.",
      stackCategoriesAria: "Categorías del stack",
      carouselAria: "Carrusel de tecnologías",
      technology: "tecnología",
      technologies: "tecnologías",
      previousSlideAria: "Diapositiva anterior",
      nextSlideAria: "Diapositiva siguiente",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        mobile: "Móvil",
        devops: "Cloud y DevOps",
      },
      slideAria: (name, index, count) =>
        `${name}, diapositiva ${index} de ${count}`,
      categoryTechnologiesAria: (name) => `Tecnologías de ${name}`,
      goToSlideAria: (index, name) =>
        `Ir a la diapositiva ${index}: ${name}`,
    },
    contact: {
      title: "Contacto",
      headline: "Trabajemos juntos",
      description:
        "¿Tienes un proyecto en mente o solo quieres saludar? Siempre estoy abierto a oportunidades y colaboraciones interesantes.",
    },
    footer: {
      allRightsReserved: "Todos los derechos reservados.",
      builtWith: "Hecho con Next.js, Tailwind CSS y shadcn/ui",
    },
  },
  en: {
    profile: {
      title: "Full Stack Developer",
      role: "Systems Engineer",
      bio: "Systems Engineer and full-stack developer building reliable, human-centered web and mobile applications. Currently leading Gota Azul, a real-time water consumption monitoring app for Colombian households.",
      profileImageAlt:
        "Portrait of Juan Diego Meza, full stack developer",
    },
    nav: {
      languageAria: "Change language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      themeToDark: "Switch to dark mode",
      themeToLight: "Switch to light mode",
    },
    navLinks: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      viewProjects: "View Projects",
      contact: "Contact",
      githubAria: "GitHub profile",
      linkedinAria: "LinkedIn profile",
    },
    about: {
      title: "About",
      heading: "Systems engineering, full-stack passion",
      intro:
        "I'm a recently graduated Systems Engineer from Cali, Colombia, passionate about the full stack — from designing clean APIs and data models to crafting thoughtful interfaces.",
      detail:
        "I currently lead the development of Gota Azul, a web and mobile application that helps Colombian households monitor their water consumption in real time. I enjoy working across the stack and turning complex problems into simple, reliable products.",
      highlights: {
        roleLabel: "Role",
        roleValue: "Systems Engineer",
        focusLabel: "Focus",
        focusValue: "Full Stack Development",
        basedLabel: "Based in",
      },
    },
    projects: {
      title: "Projects",
      heading: "What I'm building",
      subtitle:
        "A selection of projects I'm actively developing — from water monitoring to scheduling platforms.",
      statuses: {
        ["gota-azul"]: "Live",
        ["agenda-saas"]: "In Development",
        ["merito-tracker"]: "In Production",
      },
      liveSite: "Live Site",
      viewOnGitHub: "View on GitHub",
      items: {
        ["gota-azul"]:
          "Real-time water consumption monitoring for Colombian households. Includes role-based authentication, IoT artifact management, WHO standard comparison, and Excel/PDF export. Web frontend in Next.js with an Ionic mobile app, powered by a Python Flask API.",
        ["agenda-saas"]:
          "Online scheduling and booking platform for service SMBs. Features online reservations, automatic reminders via Celery, and a monorepo architecture built with Django, PostgreSQL, Redis, and Docker Compose.",
        ["merito-tracker"]:
          "Vacancy explorer for Colombia's 2026 Procuraduría merit contest. Browse 370+ indexed positions, compare your profile against requirements, and track key dates for your application — 100% local in the browser, no backend, no telemetry. Static architecture with pure TypeScript domain logic and automatic deploys to Cloudflare Pages.",
      },
    },
    skills: {
      title: "Skills",
      heading: "Tools I work with",
      subtitle:
        "Technologies I use to take products from idea to production, across the full stack.",
      stackCategoriesAria: "Stack categories",
      carouselAria: "Technology stack carousel",
      technology: "technology",
      technologies: "technologies",
      previousSlideAria: "Previous slide",
      nextSlideAria: "Next slide",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        mobile: "Mobile",
        devops: "Cloud & DevOps",
      },
      slideAria: (name, index, count) =>
        `${name}, slide ${index} of ${count}`,
      categoryTechnologiesAria: (name) => `${name} technologies`,
      goToSlideAria: (index, name) => `Go to slide ${index}: ${name}`,
    },
    contact: {
      title: "Contact",
      headline: "Let's work together",
      description:
        "Have a project in mind or just want to say hi? I'm always open to interesting opportunities and collaborations.",
    },
    footer: {
      allRightsReserved: "All rights reserved.",
      builtWith: "Built with Next.js, Tailwind CSS & shadcn/ui",
    },
  },
};