/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "p-100": "var(--color-p-100)",
        "p-200": "var(--color-p-200)",
        "p-300": "var(--color-p-300)",
        "p-400": "var(--color-p-400)",
      },
      backgroundColor: {
        "p-100": "var(--color-p-100)",
        "p-200": "var(--color-p-200)",
        "p-300": "var(--color-p-300)",
        "p-400": "var(--color-p-400)",
      }
    },
  },
  plugins: [],
};
