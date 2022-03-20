const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const autoprefixer = require("gulp-autoprefixer");

function buildStyles() {
  return src("scss/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest("css"));
}

function watchTask() {
  watch(["scss/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
