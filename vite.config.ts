import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
    allowedHosts: [
      // 👇 اكتب هنا الدومين اللي ظهرلك من Gitpod بالكامل
      "8080-tarek141177-tariksholog-rf35jejuytv.ws-eu120.gitpod.io",
      "8081-tarek141177-tariksholog-rf35jejuytv.ws-eu120.gitpod.io",
    ],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
