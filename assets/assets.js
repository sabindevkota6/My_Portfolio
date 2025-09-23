/* Assets and data file
   - exports all images, icons, and data used throughout the portfolio
   - organizes project data, service info, and personal details
   - components import from here to get consistent data and images
*/

// Image imports - profile pictures, icons, and UI elements
import user_image from "./user_image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

// Assets object - maps asset names to imported images for easy component access
export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

// Portfolio projects data - each item: { title, description, bgImage, url }
export const workData = [
  {
    title: "CLI Rental-App",
    description: "Python Development",
    bgImage: "/work-1.png",
    url: "https://github.com/sabindevkota6/TechnoProperty-Nepal.git",
  },
  {
    title: "Perfume Website",
    description: "Full-Stack Development",
    bgImage: "/work-2.png",
    url: "https://github.com/sabindevkota6/ScentedBliss.git",
  },
  {
    title: "Networking App",
    description: "MERN Development",
    bgImage: "/work-3.png",
    url: "https://github.com/sabindevkota6/Search-the-Professionals.git",
  },
  {
    title: "Printer Ecommerce",
    description: "Front-End Development",
    bgImage: "/work-4.png",
    url: "https://github.com/sabindevkota6/PressPrint-Nepal.git",
  },
];

// Services offered data - each service: { icon, title, description, link }
export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web Development",
    description:
      "End-to-end development of dynamic and scalable web applications using modern frameworks (React, Next.js, Node.js, Express, Python, Java etc.), tailored to client needs....",
    link: "https://sabindevkota6.github.io/web-development/services/2025/09/17/custom-web-application-development.html",
  },
  {
    icon: assets.mobile_icon,
    title: "UI/UX & Frontend Design",
    description:
      "Creating responsive, accessible, and visually engaging user interfaces with a focus on performance and user experience using HTML, CSS, Tailwind, and JavaScript frameworks....",
    link: "https://sabindevkota6.github.io/ui-ux/design/frontend/2025/09/17/ui-ux-frontend-design-services.html",
  },
  {
    icon: assets.ui_icon,
    title: "API & Backend Development",
    description:
      "Building secure, efficient, and well-documented RESTful and GraphQL APIs, database design (SQL/NoSQL), and server-side logic for seamless data handling....",
    link: "https://sabindevkota6.github.io/api/backend/development/2025/09/17/api-backend-development-services.html",
  },
  {
    icon: assets.graphics_icon,
    title: "Deployment & Maintenance",
    description:
      "Hosting, CI/CD setup, cloud deployment (AWS, Vercel, Netlify), performance optimization, and ongoing support to ensure smooth operation and scalability....",
    link: "https://sabindevkota6.github.io/deployment/maintenance/devops/2025/09/17/deployment-maintenance-services.html",
  },
];

// Personal info cards data - each item: { icon, iconDark, title, description }
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript, Java, Python, React Js, Next Js, Node Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "BIT (Hons) Computing",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built 10+ projects",
  },
];

// Development tools icons - array of tool images used in About section
export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
