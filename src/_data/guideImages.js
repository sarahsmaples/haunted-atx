const fs = require("fs");
const path = require("path");

const VALID_EXTS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"]);
const DIR = path.join(__dirname, "../assets/images/guides");

module.exports = function () {
  return fs
    .readdirSync(DIR)
    .filter((f) => VALID_EXTS.has(path.extname(f).toLowerCase()))
    .map((f) => ({ src: `/assets/images/guides/${f}`, alt: "" }));
};
