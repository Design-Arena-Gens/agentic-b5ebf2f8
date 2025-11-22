import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f2f6ff",
          100: "#e6edff",
          200: "#c0d3ff",
          300: "#99b9ff",
          400: "#4d86ff",
          500: "#0053ff",
          600: "#004be6",
          700: "#0033a3",
          800: "#00267a",
          900: "#001a52"
        }
      }
    }
  },
  plugins: []
};

export default config;
