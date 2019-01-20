const gulp = require("gulp"),
      imagemin = require('gulp-imagemin'),
      usemin = require('gulp-usemin'),
      htmlmin = require('gulp-htmlmin'),
      rev = require('gulp-rev'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      del = require('del'),
      browserSync = require("browser-sync").create();

gulp.task('previewBuild', function() {
  browserSync.init({ 
    notify: false, 
    server: { baseDir: "docs" } 
  });
});

gulp.task('deleteDist', () => del('./docs'));

gulp.task('copyFiles', function() {
  const paths = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ];
  return gulp.src(paths)
    .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});

// gulp.task('copyHTML', function () {
//   return gulp.src("./app/index.html")
//     .pipe(gulp.dest("./docs"));
// });

// gulp.task('compressJS', function (cb) {
//   pump([
//     gulp.src(['./app/temp/scripts/**/*.js', '!./app/temp/scripts/modernizr.js']),
//     uglify(),
//     gulp.dest('./docs/assets/scripts')
//   ],
//     cb
//   );
// });

// gulp.task('compressCSS', function() {
//   return gulp.src('./app/temp/styles/styles.css')
//     .pipe(cleanCSS({ compatibility: 'ie8' }))
//     .pipe(gulp.dest('./docs/assets/styles'));
// });

gulp.task('usemin', function () {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [cleanCSS({ compatibility: 'ie8' }), rev()],
      html: [htmlmin({ collapseWhitespace: true })],
      js: [uglify(), rev()],
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', gulp.series('deleteDist', 'copyFiles', 'icons', 'optimizeImages', 'styles', 'scripts', 'usemin'));