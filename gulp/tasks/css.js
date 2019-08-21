const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      nested = require('postcss-nested'),
      cssImport = require('postcss-import'),
      mixins = require('postcss-mixins'),
      rfs = require('rfs');

const options = {
  twoDimensional: true,
  baseFontSize: 16,
  fontSizeUnit: 'rem',
  breakpoint: 768,
  breakpointUnit: 'px',
  factor: 40
};

gulp.task('buildCSS', () => 
  gulp.src('./app/src/css/styles.css')
    .pipe(postcss([cssImport, mixins, nested, autoprefixer, rfs(options)]))
    .on('error', function(error) {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/css'))
);