const gulp = require('gulp'),
      watch = require('gulp-watch'),
      browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });
  watch('./app/index.html', () => browserSync.reload());
  gulp.watch('./app/src/css/**/*.css', gulp.series('buildCSS', 'reloadCSS'));
  gulp.watch('./app/src/js/**/*.js').on('change', gulp.series('modernizr', 'buildJS', 'reloadJS'));
});

gulp.task('reloadCSS', () =>
  gulp.src('./app/temp/css/styles.css')
    .pipe(browserSync.stream())
);

gulp.task('reloadJS', () => browserSync.reload());