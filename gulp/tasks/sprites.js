const gulp = require('gulp'),
  del = require('del'),
  svgSprite = require('gulp-svg-sprite'),
  rename = require('gulp-rename'),
  svg2png = require('gulp-svg2png');

const config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function () {
          return function (sprite, render) {
            return render(sprite).split('.svg').join('.png');
          };
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', function () {
  return del(['./app/temp/sprite', './app/src/img/sprites']);
});

gulp.task('createSprite', function () {
  return gulp.src('./app/src/img/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy', function () {
  return gulp.src('./app/temp/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', function () {
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./app/src/img/sprites'));
});

gulp.task('copySpriteCSS', function () {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/src/css/modules'));
});

gulp.task('endClean', function () {
  return del('./app/temp/sprite');
});

gulp.task('icons', gulp.series('beginClean', 'createSprite', 'createPngCopy', gulp.parallel('copySpriteGraphic', 'copySpriteCSS'), 'endClean'));