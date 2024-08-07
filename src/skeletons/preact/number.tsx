// derivative of <Input />
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
import type { JSX } from "preact";
import Input from "./input";

interface Number extends JSX.HTMLAttributes<HTMLInputElement> {}

export default function Number(props: Number) {
  return <Input label="count" type="number" {...props} />;
}
