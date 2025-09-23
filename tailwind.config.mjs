/* Tailwind CSS configuration for portfolio site
   - defines which files to scan for CSS classes
   - extends default theme with custom colors and utilities
   - works with CSS variables defined in globals.css
*/

/** @type {import('tailwindcss').Config} */
export default {
  // Content paths - tells Tailwind which files contain CSS classes to include in build
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Theme configuration - extends default Tailwind theme with custom settings
  theme: {
    extend: {
      // Custom colors - add portfolio-specific colors here if needed
      colors: {},
    },
  },
  // Plugins array - add Tailwind plugins for extra functionality here
  plugins: [],
};
