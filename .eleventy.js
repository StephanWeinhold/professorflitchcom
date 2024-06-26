module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addFilter("niceDate", (dateString) => {
    dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('utc', { year:"numeric", month:"short", day:"numeric"}) ;
  });

  eleventyConfig.addPlugin(require("./_11ty/optimize-html.js"));
};