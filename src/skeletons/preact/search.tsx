// derivative of <Input />
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search
import type { JSX } from "preact";
import Input from "./input";

interface Search extends JSX.HTMLAttributes<HTMLInputElement> {}

export default function Search(props: Search) {
  return <Input type="search" placeholder="search" {...props} />;
}
