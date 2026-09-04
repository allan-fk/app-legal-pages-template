(function () {
  const config = window.APP_CONFIG || {};
  document.documentElement.style.setProperty("--accent", config.primaryColor || "#5b5ce2");
  document.querySelectorAll("[data-app-name]").forEach((element) => { element.textContent = config.name || "Your App"; });
  document.querySelectorAll("[data-developer-name]").forEach((element) => { element.textContent = config.developerName || "Your company or name"; });
  document.querySelectorAll("[data-support-email]").forEach((element) => { element.textContent = config.supportEmail || "support@example.com"; element.href = `mailto:${config.supportEmail || "support@example.com"}`; });
  document.querySelectorAll("[data-updated-at]").forEach((element) => { element.textContent = config.updatedAt || ""; });
  const tagline = document.querySelector("[data-tagline]"); if (tagline) tagline.textContent = config.tagline || "";
  const description = document.querySelector("[data-description]"); if (description) description.textContent = config.description || "";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && document.body.dataset.page === "home" && config.description) metaDescription.content = config.description;
  const storeLink = document.querySelector("[data-app-store-link]"); if (storeLink && config.appStoreUrl && config.appStoreUrl !== "#") storeLink.href = config.appStoreUrl;
  document.title = document.title.replace("Your App", config.name || "Your App");
})();
