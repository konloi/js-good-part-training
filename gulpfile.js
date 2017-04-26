var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

var jsFiles = 'src/**/*.js';
var specFiles = 'specs/**/*.js';

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
    notify: false
  });
});

gulp.task('scripts', function() {
  return gulp.src(jsFiles)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('specs', function() {
    return gulp.src(specFiles)
        .pipe(concat('specs.js'))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('default', ['browserSync', 'scripts', 'specs'], function () {
   gulp.watch(jsFiles, ['scripts']);
   gulp.watch(specFiles, ['specs']);
});

