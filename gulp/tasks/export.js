const gulp = require('gulp'),
      zip = require('gulp-zip'),
      del = require('del');

gulp.task('deleteZIP', () => del('./zip'));

gulp.task('copy', function(done) {
  gulp.src('dist/**')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('zip'));
    done();
  }
);

gulp.task('export', gulp.series('deleteZIP', 'copy'));