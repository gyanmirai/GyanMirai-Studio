import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";

const source = new URL("../src/", import.meta.url);
const output = new URL("../dist/", import.meta.url);
const basePathIndex = process.argv.indexOf("--base-path");
const basePathValue =
  basePathIndex === -1 ? "/" : process.argv[basePathIndex + 1];
if (basePathValue === undefined || basePathValue.startsWith("--")) {
  throw new Error("--base-path requires a path value.");
}
const basePath = basePathValue.replace(/\/$/, "") + "/";
if (!/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(basePath)) {
  throw new Error("Base path must be an absolute URL path with safe segments.");
}
const excluded = new Set([
  "previous",
  "studio-v1",
  "academic-ddvs.webp",
  "academic-ddvs-light.webp",
  "gyanmirai-brand-sculpture-v2.webp",
  "favicon.svg",
]);
if (process.argv.includes("--public")) {
  for (const path of ["design-preview", "proof-preview.js", "data"]) {
    excluded.add(path);
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, {
  recursive: true,
  filter: (path) => !excluded.has(basename(path)),
});
async function rewriteHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewriteHtml(path);
    } else if (entry.name.endsWith(".html")) {
      const html = await readFile(path, "utf8");
      await writeFile(
        path,
        html.replace(/\b(href|src)="\/(?!\/)/g, `$1="${basePath}`),
      );
    }
  }
}
await rewriteHtml(fileURLToPath(output));
await writeFile(new URL(".nojekyll", output), "");
console.log(`Static website built in dist/ for ${basePath}.`);
