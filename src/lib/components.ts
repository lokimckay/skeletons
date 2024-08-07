import startCase from "lodash.startcase";
import type { ComponentEntry } from "./types";

export async function getComponents(): Promise<ComponentEntry[]> {
  const allAstro = import.meta.glob("~/**/*.astro", {
    query: "?raw",
    import: "default",
  });
  const allTsx = import.meta.glob("~/**/*.tsx", {
    query: "?raw",
    import: "default",
  });
  const allCss = import.meta.glob("~/**/*.css", {
    query: "?raw",
    import: "default",
  });
  const all = [
    ...Object.entries(allAstro),
    ...Object.entries(allTsx),
    ...Object.entries(allCss),
  ];
  let combined = {};
  for (const [_key, value] of all) {
    const key = _key.split("/").slice(-1)[0];
    (combined as any)[key] = value();
  }
  const results = await resolveObject(combined);
  const replaced = Object.fromEntries(
    Object.entries(results as [string, string]).map(([k, v]) => [
      k,
      v.replaceAll("~/css/", "./"),
    ])
  );

  const slugs = Object.keys(allAstro).map(
    (key) => key.split("/").pop()?.split(".")[0]!
  );

  return slugs.filter(Boolean).map((slug) => ({
    slug,
    name: startCase(slug),
    astro: replaced[`${slug}.astro`],
    tsx: replaced[`${slug}.tsx`],
    css: replaced[`${slug}.css`],
    isDerivative: replaced[`${slug}.astro`]?.includes("// derivative of"),
  }));
}

function resolveObject(obj: any) {
  return Promise.all(
    Object.entries(obj).map(async ([k, v]) => [k, await v])
  ).then(Object.fromEntries);
}
