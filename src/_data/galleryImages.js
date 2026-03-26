const fs = require("fs");
const path = require("path");

const VALID_EXTS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"]);
const DIR = path.join(__dirname, "../assets/images/gallery");

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = function () {
  const images = fs
    .readdirSync(DIR)
    .filter((f) => VALID_EXTS.has(path.extname(f).toLowerCase()))
    .map((f) => ({ src: `/assets/images/gallery/${f}`, alt: "" }));

  return shuffle(images);
};
