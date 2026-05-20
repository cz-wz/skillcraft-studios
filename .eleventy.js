module.exports = function(eleventyConfig) {
  // If you have a CSS folder inside src, this forces 11ty to pass it to the final build untouched
  eleventyConfig.addPassthroughCopy("src/css"); 
  
  return {
    dir: {
      input: "src",
      output: "_site" // This is the compiled folder that Netlify will serve live
    }
  };
};