const gulp = require('gulp'),
      zip = require('gulp-zip'),
      del = require('del');

gulp.task('deleteZIP', () => del('./dist.zip'));

gulp.task('copy', function(done) {
  gulp.src('dist/**')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'));
    done();
  }
);

gulp.task('export', gulp.series('deleteZIP', 'copy'));