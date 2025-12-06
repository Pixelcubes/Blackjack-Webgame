import { defineConfig } from "vite";

export default defineConfig({
    root: ".",  // Root directory of the project
    build: {
        outDir: "../public",  // Directory for the production build
    },
    server: {
        port: 3000,  // Default development server port
    },
}); 