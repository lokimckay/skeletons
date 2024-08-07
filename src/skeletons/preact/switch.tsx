import { createRef, type JSX } from "preact";
import "~/css/switch.css";

interface Switch extends JSX.HTMLAttributes<HTMLInputElement> {}

export default function Switch(props: Switch) {
  const { id = "my-switch", label, onChange, ...rest } = props;
  const ref = createRef<HTMLInputElement>();

  function onClick() {
    const input = ref.current!;
    const newState = !input.checked;
    input.checked = newState;
    input.value = newState.toString();
    if (typeof onChange === "function")
      onChange({
        target: input,
      } as unknown as JSX.TargetedEvent<HTMLInputElement>);
  }

  return (
    <div class="switch">
      {label && <label for={id}>{label}</label>}
      <button onClick={onClick}>
        <div class="track">
          <input type="checkbox" id={id} ref={ref} {...rest} />
          <span class="knob" />
        </div>
      </button>
    </div>
  );
}
