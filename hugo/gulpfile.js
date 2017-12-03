const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

gulp.task('html', () => {
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('generate-service-worker', (callback) => {
  const swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(`${rootDir}/service-worker.js`, {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  }, callback);
});

gulp.task('img-min', () =>
    gulp.src('public/assets/img/*')
        .pipe(imagemin({
          optimizationLevel: 5
        }))
        .pipe(gulp.dest(function(file) {
          return file.base;
        }))
);

gulp.task('default', [ 'html', 'generate-service-worker', 'img-min']);
