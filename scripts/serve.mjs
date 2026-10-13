import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve(process.argv.includes("--dist") ? "dist" : "src");
const port = Number(process.env.PORT || 3057);
const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    let file = resolve(
      root,
      "." + (pathname === "/" ? "/index.html" : pathname),
    );
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    if (!(await stat(file)).isFile()) throw new Error("Not a file");
    res.writeHead(200, {
      "Content-Type":
        (types[extname(file)] || "application/octet-stream") +
        ([".html", ".css", ".js", ".svg"].includes(extname(file))
          ? "; charset=utf-8"
          : ""),
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`GyanMirai preview: http://127.0.0.1:${port}`),
);
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
