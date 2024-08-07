import type { JSX } from "preact";
import "~/css/externalLink.css";

interface ExternalLink extends JSX.HTMLAttributes<HTMLAnchorElement> {
  width?: string | number;
  label: string;
}

export default function ExternalLink({
  className,
  width = 16,
  href = "https://google.com",
  label = "google.com",
  ...rest
}: ExternalLink) {
  return (
    <a
      class={[className, "external-link"].filter(Boolean).join(" ")}
      href={href}
      {...rest}
    >
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        width={width}
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 100 100"
        xmlSpace="preserve"
      >
        <path d="M28.8,84.1h36l0,0c7.2,0,13-5.8,13-13v-22c0-1.7-1.3-3-3-3l0,0c-1.7,0-3,1.3-3,3v22c0,3.9-3.1,7-7,7l0,0h-36  c-3.9,0-7-3.1-7-7v-36c0-3.9,3.1-7,7-7l0,0h22l0,0c1.7,0,3-1.3,3-3s-1.3-3-3-3h-22l0,0c-7.2,0-13,5.8-13,13l0,0v36  C15.8,78.3,21.6,84.1,28.8,84.1z" />
        <path d="M84.2,37.2V18.9c0-0.2,0-0.4-0.1-0.6c0-0.1,0-0.2-0.1-0.2c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.2-0.2-0.3  c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.3-0.5-0.6-0.8-0.8l-0.2-0.1C82.4,16.1,82.2,16,82,16l-0.3-0.1c-0.2,0-0.4-0.1-0.6-0.1l0,0H62.8l0,0  c-1.7,0-3,1.3-3,3s1.3,3,3,3h11.1L46.4,49.4c-1.2,1.2-1.2,3.1,0,4.2c1.2,1.2,3.1,1.2,4.2,0l27.6-27.5v11.1c0,1.7,1.3,3,3,3l0,0  C82.8,40.2,84.1,38.8,84.2,37.2z" />
      </svg>
    </a>
  );
}
