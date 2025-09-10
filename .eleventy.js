const tagColors = require("./src/_data/tagColors.json");

module.exports = function (eleventyConfig) {
  // Passthrough static assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });

  // Date filters used in templates
  eleventyConfig.addNunjucksFilter("htmlDateString", (dateObj) => {
    try {
      if (!dateObj) return "";
      const d = new Date(dateObj);
      if (Number.isNaN(d.getTime())) return "";
      return d.toISOString().slice(0, 10); // YYYY-MM-DD
    } catch {
      return "";
    }
  });

  // Collections
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/blog/**/*.md").sort((a, b) => b.date - a.date);
  });

  // Build a lightweight search index from blog posts
  eleventyConfig.addCollection("searchIndex", (collectionApi) => {
    const posts = collectionApi.getFilteredByGlob("src/blog/**/*.md");
    return posts.map((item) => ({
      id: item.url,
      url: item.url,
      title: (item.data && item.data.title) || item.fileSlug || "",
      description: (item.data && item.data.description) || "",
      tags: (item.data && item.data.tags) || [],
      date: item.date,
    }));
  });

  // Utility: take first or last N items from an array (mirrors Eleventy base blog)
  eleventyConfig.addNunjucksFilter("head", (arr, n) => {
    if (!Array.isArray(arr)) return arr;
    if (typeof n !== "number") return arr;
    if (n < 0) {
      return arr.slice(n);
    }
    return arr.slice(0, n);
  });

  // Map tag name to a hex color from data, with fallback
  eleventyConfig.addNunjucksFilter("tagColor", (tag) => {
    if (!tag) return "#6b7280"; // gray-500 fallback
    const key = String(tag).trim().toLowerCase();
    return tagColors[key] || "#6b7280";
  });

  // JSON stringify helper for Nunjucks (used by search.json)
  eleventyConfig.addNunjucksFilter("json", (value) => {
    try {
      return JSON.stringify(value);
    } catch {
      return "[]";
    }
  });

  // Estimate reading time (approx. 200 words per minute)
  eleventyConfig.addNunjucksFilter("readingTime", (text) => {
    if (!text || typeof text !== "string") return "1 min read";
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return `${minutes} min read`;
  });

  eleventyConfig.addNunjucksFilter("readableDate", (dateObj) => {
    try {
      if (!dateObj) return "";
      const d = new Date(dateObj);
      if (Number.isNaN(d.getTime())) return "";
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(d);
    } catch {
      return "";
    }
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
