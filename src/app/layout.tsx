import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Cursor } from "@/components/cursor";
import { LanguageProvider } from "@/lib/i18n/provider";
import { ThemeProvider } from "@/lib/theme/provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://juan-diego.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Juan Diego Meza — Full Stack Developer",
    template: "%s — Juan Diego Meza",
  },
  description:
    "Systems Engineer and Full Stack Developer based in Cali, Colombia. Building web and mobile applications with Next.js, React, Python and more.",
  applicationName: "Juan Diego Meza",
  keywords: [
    "Juan Diego Meza",
    "Full Stack Developer",
    "Systems Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Cali",
    "Colombia",
  ],
  authors: [{ name: "Juan Diego Meza", url: SITE_URL }],
  creator: "Juan Diego Meza",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Juan Diego Meza",
    title: "Juan Diego Meza — Full Stack Developer",
    description:
      "Systems Engineer and Full Stack Developer based in Cali, Colombia. Building web and mobile applications with Next.js, React, Python and more.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Diego Meza — Full Stack Developer",
    description:
      "Systems Engineer and Full Stack Developer based in Cali, Colombia. Building web and mobile applications with Next.js, React, Python and more.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  // Favicon y manifest
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

// SEO scripts embedded
const lanScript = `(function(){try{var l=localStorage.getItem("lang");if(l!=="es"&&l!=="en"){l=(navigator.language||"").toLowerCase().startsWith("es")?"es":"en"}document.documentElement.lang=l}catch(e){}})();(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light"}document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: lanScript,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col">
        <Cursor />
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}