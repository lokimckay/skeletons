import type { JSX } from "preact";
import "~/css/badge.css";

interface Badge extends JSX.HTMLAttributes<HTMLSpanElement> {
  label: string;
  color?: string;
}

export default function Badge(props: Badge) {
  const { label = "badge", color } = props;
  return (
    <span class="badge" style={color ? `--bg-color: ${color}` : {}}>
      {label}
    </span>
  );
}
