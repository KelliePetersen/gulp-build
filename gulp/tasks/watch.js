const gulp = require("gulp"),
      watch = require("gulp-watch"),
      browserSync = require("browser-sync").create();

gulp.task("watch", function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  watch("./app/index.html", function () {
    browserSync.reload();
  });
  gulp.watch("./app/assets/styles/**/*.css", gulp.series('styles', 'cssInject'));
  gulp.watch("./app/assets/scripts/**/*.js").on('change', gulp.series('modernizr', 'scripts', "scriptsRefresh"));
});

gulp.task("cssInject", function () {
  return gulp.src("./app/temp/styles/styles.css")
    .pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", function() {
  browserSync.reload();
});