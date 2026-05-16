import { SiGithub, SiGmail } from "react-icons/si";
import type { IconBaseProps } from "react-icons";

type IconProps = IconBaseProps & { size?: number };

export function GithubIcon({ size = 16, ...props }: IconProps) {
  return <SiGithub aria-hidden={true} focusable={false} size={size} {...props} />;
}

export function LinkedinIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={true}
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function GmailIcon({ size = 16, ...props }: IconProps) {
  return <SiGmail aria-hidden={true} focusable={false} size={size} {...props} />;
}

export function XIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={true}
      {...props}
    >
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.26L4.8 22H2.04l6.97-7.96L2 2h6.91l4.34 5.74L18.24 2Zm-2.4 18h1.84L7.27 4H5.34l10.5 16Z" />
    </svg>
  );
}
