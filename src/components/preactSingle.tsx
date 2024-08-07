import components from "@/skeletons/preact/index";

interface Props {
  component?: (props: any) => any;
  name?: string;
}

export default function PreactSingle({ component, name }: Props) {
  const _component = component || (components as any)[name!];
  if (typeof _component !== "function") return <div>Component not found</div>;
  return <div class="component preact">{_component({})}</div>;
}
