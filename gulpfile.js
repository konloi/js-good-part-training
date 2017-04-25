var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

var jsFiles = ['src/**/*.js', 'specs/**/*.js'];

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.',
    },
    notify: false
  })
});

gulp.task('scripts', function() {
  return gulp.src(jsFiles)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('default', ['browserSync', 'scripts'], function () {
   gulp.watch(jsFiles, ['scripts']);
});

