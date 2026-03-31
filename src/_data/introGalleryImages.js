const fs = require("fs");
const path = require("path");

const VALID_EXTS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"]);
const DIR = path.join(__dirname, "../assets/images/intro-gallery");

module.exports = function () {
  const imgs = fs
    .readdirSync(DIR)
    .filter((f) => VALID_EXTS.has(path.extname(f).toLowerCase()))
    .map((f) => ({ src: `/assets/images/intro-gallery/${f}`, alt: "" }));

  // Fisher-Yates shuffle so order varies per build
  for (let i = imgs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imgs[i], imgs[j]] = [imgs[j], imgs[i]];
  }

  return imgs;
};
