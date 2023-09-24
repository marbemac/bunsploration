import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import type { ServerBuild } from "@remix-run/node";
import { broadcastDevReady, createRequestHandler } from "@remix-run/node";

const PORT = process.env.PORT || 3000;
const BUILD_PATH = "../build/index.js";
const NODE_ENV = process.env.NODE_ENV;

console.log(
  `server.ts is running with "${
    typeof Bun !== "undefined" ? "bun" : "node"
  }" and NODE_ENV "${NODE_ENV}"`
);

const build: ServerBuild = await import(BUILD_PATH);

const app = new Elysia();

app.use(staticPlugin({ prefix: "/build", assets: "public/build" }));

app.get("/favicon.ico", () => Bun.file("public/favicon.ico"));

app.all("*", async ({ request }) => {
  const handler = createRequestHandler(build, NODE_ENV);

  const loadContext = {};

  return handler(request, loadContext);
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);

  if (build.mode === "development") {
    broadcastDevReady(build);
  }
});
