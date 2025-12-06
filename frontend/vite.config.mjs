import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "Blackjack-Webgame";

export default defineConfig({
    base: `/${repoName}/`,  // Required for GitHub Pages
    plugins: [react()],     // Required for JSX in production
    root: ".",              // Your project root
    build: {
        outDir: "docs",     // GitHub Pages will serve this folder
        emptyOutDir: true,  // Clears old files (overwrites it)
    },
    server: {
        port: 3000,
    },
});
