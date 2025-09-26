// utils/clarity.js
// Utility functions for Microsoft Clarity custom events

/**
 * Track custom events in Microsoft Clarity
 * @param {string} eventName - Name of the event to track
 * @param {object} eventData - Additional data to send with the event
 */
export const trackEvent = (eventName, eventData = {}) => {
  // Check if clarity is available (avoid errors during development)
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("event", eventName, eventData);
  }
};

// Pre-defined event tracking functions for common interactions
export const clarityEvents = {
  // Navigation events
  contactButtonClick: () => trackEvent("contact_button_click"),
  resumeDownload: () => trackEvent("resume_download"),
  menuToggle: (isOpen) => trackEvent("mobile_menu_toggle", { isOpen }),

  // Theme events
  themeToggle: (isDarkMode) =>
    trackEvent("theme_toggle", { theme: isDarkMode ? "dark" : "light" }),

  // Form events
  contactFormSubmit: (success) =>
    trackEvent("contact_form_submit", { success }),
  contactFormStart: () => trackEvent("contact_form_start"),

  // Portfolio events
  projectView: (projectName) =>
    trackEvent("project_view", { project: projectName }),
  serviceView: (serviceName) =>
    trackEvent("service_view", { service: serviceName }),

  // External link clicks
  socialLinkClick: (platform) => trackEvent("social_link_click", { platform }),
  externalLinkClick: (url) => trackEvent("external_link_click", { url }),

  // Scroll events
  sectionView: (sectionName) =>
    trackEvent("section_view", { section: sectionName }),

  // Engagement events
  toolHover: (toolName) => trackEvent("tool_hover", { tool: toolName }),
  serviceCardHover: (serviceName) =>
    trackEvent("service_card_hover", { service: serviceName }),
};
