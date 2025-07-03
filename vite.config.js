import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // build: {
  //   ssr: "src/entry-server.jsx",
  //   outDir: "dist-ssr",
  //   rollupOptions: {
  //     input: "src/entry-server.jsx",
  //   },
  // },
  base: "/cd-site/",
});
