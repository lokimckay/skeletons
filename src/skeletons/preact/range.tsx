// derivative of <Input />
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
import type { JSX } from "preact";
import Input from "./input";

interface Range extends JSX.HTMLAttributes<HTMLInputElement> {}

export default function Range(props: Range) {
  return <Input label="volume" type="range" min="0" max="100" {...props} />;
}
