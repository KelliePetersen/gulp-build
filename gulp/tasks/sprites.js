const gulp = require('gulp'),
      del = require('del'),
      svgSprite = require('gulp-svg-sprite'),
      rename = require('gulp-rename');

const config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('cleanSprites', () => del(['./app/temp/sprite', './app/src/img/sprites']));

gulp.task('createSprite', () =>
  gulp.src('./app/src/img/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'))
);

gulp.task('copySpriteGraphic', () =>
  gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/src/img/sprites'))
);

gulp.task('copySpriteCSS', () => 
  gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/src/css/modules'))
);

gulp.task('cleanTempSprite', () => del('./app/temp/sprite'));

gulp.task(
  'sprite',
  gulp.series(
    'cleanSprites',
    'createSprite',
    gulp.parallel('copySpriteGraphic', 'copySpriteCSS'),
    'cleanTempSprite'
  )
);