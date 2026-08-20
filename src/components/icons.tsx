import type { SVGProps } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return <SiGithub aria-hidden="true" {...props} />;
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return <FaLinkedin aria-hidden="true" {...props} />;
}
