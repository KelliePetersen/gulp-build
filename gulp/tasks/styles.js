const gulp = require("gulp"),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      nested = require("postcss-nested"),
      cssImport = require("postcss-import"),
      mixins = require("postcss-mixins");

gulp.task("styles", function () {
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, nested, autoprefixer]))
    .on("error", function(error) {
      console.log(error.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});