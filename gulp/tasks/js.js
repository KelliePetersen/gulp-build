const gulp = require('gulp'),
      webpack = require('webpack');

gulp.task('buildJS', (done) => {
  webpack(require('../../webpack.config.js'), function(err, stats) {
    console.log(stats.toString());
    done();
  });
});