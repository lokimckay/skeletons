// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
import type { JSX } from "preact";

interface Textarea extends JSX.HTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea(props: Textarea) {
  const { id = "my-textarea", label, ...rest } = props;
  return (
    <div class="textarea">
      {label && <label for={id}>{label}</label>}
      <textarea id={id} {...rest} />
    </div>
  );
}
