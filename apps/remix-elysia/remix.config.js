/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  serverConditions: ["workerd", "worker", "browser"],
  serverMainFields: ["browser", "module", "main"],
};
