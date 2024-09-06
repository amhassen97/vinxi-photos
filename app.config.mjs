import { createApp } from "vinxi";
import reactRefresh from "@vitejs/plugin-react";

export default createApp({
  routers: [
    {
      name: "photos",
      type: "static",
      base: "/photos",
      dir: "./photos",
    },
    {
      name: "client",
      type: "spa",
      handler: "./index.html",
      target: "browser",
      plugins: () => [reactRefresh()],
    },
    {
      name: "api",
      type: "http",
      base: "/api",
      handler: "./api/index.ts",
    },
  ],
});
