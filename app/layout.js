/* Root layout component for Next.js app
   - wraps all pages with global fonts and styles
   - sets up HTML structure and metadata for the entire site
   - includes dark mode support and smooth scrolling
*/

import { Outfit, Ovo } from "next/font/google"; // Google Fonts for typography
import "./globals.css"; // global styles and Tailwind CSS
import Script from "next/script"; // Next.js Script component for loading external scripts

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
        {/* Microsoft Clarity analytics script */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tg6zxxnujm");
            `,
          }}
        />
        {/* Page content - rendered by Next.js routing */}
        {children}
      </body>
    </html>
  );
}
