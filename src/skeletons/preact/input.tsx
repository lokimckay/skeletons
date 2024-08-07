// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
import type { JSX } from "preact";

interface Input extends JSX.HTMLAttributes<HTMLInputElement> {}

export default function Input(props: Input) {
  const { id, label, ...rest } = props;
  return (
    <div class="input">
      {label && <label for={id}>{label}</label>}
      <input id={id} {...rest} />
    </div>
  );
}
