import components from "@/skeletons/preact/index";

interface Props {
  component?: (props: any) => any;
  name?: string;
}

export default function PreactSingle({ component, name }: Props) {
  const _component = component || (components as any)[name!];
  return (
    <div class="component preact">
      {typeof _component === "function" ? (
        _component({})
      ) : (
        <>Component not found</>
      )}
    </div>
  );
}
