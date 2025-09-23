/* Root layout component for Next.js app
   - wraps all pages with global fonts and styles
   - sets up HTML structure and metadata for the entire site
   - includes dark mode support and smooth scrolling
*/

import { Outfit, Ovo } from "next/font/google"; // Google Fonts for typography
import "./globals.css"; // global styles and Tailwind CSS

// Primary font - Outfit (sans-serif) for most text
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

// Secondary font - Ovo (serif) for headings and special text
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

// Page metadata - shows in browser tab and social media previews
export const metadata = {
  title: "Sabin Devkota - Personal Website",
  description:
    "This is my personal website where I showcase my projects and skills. Lets connect and lets work together.",
};

// Root layout - wraps all pages with fonts and base styling
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} 
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >
        {/* Page content - rendered by Next.js routing */}
        {children}
      </body>
    </html>
  );
}
