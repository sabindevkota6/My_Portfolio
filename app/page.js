/* Home page component (main entry point)
   - assembles all portfolio sections in order
   - manages dark/light theme state for entire site
   - preserves theme preference in browser storage
*/

"use client";
import Navbar from "./components/navbar"; // navigation bar with menu links
import Header from "./components/Header"; // hero section with intro
import About from "./components/About"; // personal info and skills
import Services from "./components/Services"; // services offered
import Work from "./components/Work"; // portfolio projects
import Contact from "./components/Contact"; // contact form
import Footer from "./components/Footer"; // footer with links
import { useEffect, useState } from "react"; // react hooks for state and side effects

// Home component - main page that shows all portfolio sections
export default function Home() {
  // useState: tracks dark/light theme preference across the site
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect: runs on mount to check saved theme preference or system preference
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // useEffect: runs when theme changes to update DOM classes and save preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Navigation bar with theme toggle */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* Hero section */}
      <Header isDarkMode={isDarkMode} />
      {/* About me section */}
      <About isDarkMode={isDarkMode} />
      {/* Services section */}
      <Services isDarkMode={isDarkMode} />
      {/* Portfolio work section */}
      <Work isDarkMode={isDarkMode} />
      {/* Contact form section */}
      <Contact isDarkMode={isDarkMode} />
      {/* Footer with social links */}
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
