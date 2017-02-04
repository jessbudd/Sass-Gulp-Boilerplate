var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var useref = require('gulp-useref'); //concats in order
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');



//compiles sass to css
//autoprefixes css
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        //create unminified css file
        .pipe(sass(
            ({outputStyle: 'expanded'})))
        .pipe(autoprefixer({
            browsers: ['last 4 versions']}))
        .pipe(gulp.dest('app/css'))
        .pipe(sourcemaps.write('./maps'))
        //create minified css file
        .pipe(sass(
          ({outputStyle: 'compressed'})))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


//watch files
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
});


//browserSync live reload
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

//concats files in correct order
gulp.task('useref', function() {
    return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});