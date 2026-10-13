import { cp, mkdir, rm } from "node:fs/promises";
import { basename } from "node:path";

const source = new URL("../src/", import.meta.url);
const output = new URL("../dist/", import.meta.url);
const excluded = new Set([
  "previous",
  "studio-v1",
  "academic-ddvs.webp",
  "academic-ddvs-light.webp",
  "gyanmirai-brand-sculpture-v2.webp",
  "favicon.svg",
]);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, {
  recursive: true,
  filter: (path) => !excluded.has(basename(path)),
});
console.log("Static website built in dist/.");
