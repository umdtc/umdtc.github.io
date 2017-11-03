var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var rename = require("gulp-rename");

gulp.task('less', function(){
  return gulp.src('less/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Minify JS
gulp.task('minify-js', function() {
  return gulp.src('js/main.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

// Run tasks
gulp.task('default', [ 'less', 'minify-js' ]);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-js'], function() {
    gulp.watch('less/style.less', ['less']);
    gulp.watch('js/main.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});
