import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",         // all app folder files
    "./components/**/*.{js,ts,jsx,tsx}",  // all components
    "./lib/**/*.{js,ts,jsx,tsx}",         // any library/helper files
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
export default config;
