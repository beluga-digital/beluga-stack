// tailwind config is required for editor support

import sharedConfig from "@packages/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "content" | "presets"> = {
  presets: [sharedConfig],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
