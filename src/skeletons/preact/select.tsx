import type { JSX } from "preact";

type Option = { value: string; label: string };
interface Select extends JSX.HTMLAttributes<HTMLSelectElement> {
  options?: string[] | Option[];
}

export default function Select(props: Select) {
  const {
    id = "my-select",
    options = ["Option 1", "Option 2", "Option 3"],
    label,
    value,
    ...rest
  } = props;
  if (!options || options.length === 0) return;
  const opts = (
    typeof options[0] === "string"
      ? options.map((opt) => ({ value: opt, label: opt }))
      : options
  ) as Option[];

  return (
    <div class="select">
      {label && <label for={id}>{label}</label>}
      <select id={id} value={value} {...rest}>
        {opts.map(({ value, label: optionLabel }) => (
          <option value={value}>{optionLabel}</option>
        ))}
      </select>
    </div>
  );
}
