import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",     // Bright blue
        secondary: "#10B981",   // Emerald
        accent: "#F59E0B",      // Amber
        background: "#F9FAFB",  // Dashboard background
        surface: "#FFFFFF",     // Card surface
        text: "#1F2937",        // Text
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2563EB",
          secondary: "#10B981",
          accent: "#F59E0B",
          neutral: "#E5E7EB",
          "base-100": "#FFFFFF",
          "base-200": "#F9FAFB",
          "base-300": "#E5E7EB",
          "base-content": "#1F2937",
        },
      },
    ],
    darkTheme: "light", // Always use light mode
    base: true,
    styled: true,
    utils: true,
  },
};

export default config;
