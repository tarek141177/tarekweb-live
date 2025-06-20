import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const gitpodHost = process.env.GITPOD_WORKSPACE_URL?.replace("https://", "").split("/")[0];

export default defineConfig(({ mode }) => ({
 server: {
  host: "0.0.0.0",
  port: 8080,
  allowedHosts: "all"
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
  build: {
    rollupOptions: {
      external: ["@contentful/rich-text-react-renderer"],
    },
  },
}));

