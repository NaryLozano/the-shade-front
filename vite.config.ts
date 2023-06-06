/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "c8",
      reporter: ["lcov", "text"],
      all: true,
      src: ["src"],
      exclude: [
        "**/types.ts",
        "**/buttonDataTypes.ts",
        "**/modalDataTypes.ts",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.d.ts ",
        "src/routers",
        "src/styles/GlobalStyle.ts",
        "src/main.tsx",
        "src/mocks/factories/**/*.ts",
        "src/components/App/",
      ],
    },
  },
});
