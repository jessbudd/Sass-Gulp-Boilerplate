var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var useref = require('gulp-useref'); //concats files in order
var gulpIf = require('gulp-if') //minifies only js
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin'); //minifies images
var cache = require('gulp-cache') //caches images
var del = require('del') //deletes unused production files
var runSequence = require('run-sequence') //ensures build task runs correct order


//Development Tasks

//compiles sass to css, autoprefixes and adds sourcemaps
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        
        //create unminified css file in src folder
        .pipe(sass(
            ({outputStyle: 'expanded'})))
            .pipe(autoprefixer({
                browsers: ['last 4 versions'],
                cascade: false}))
            .pipe(gulp.dest('src/css'))
        
        //create minified css file in src folder
        .pipe(sass(
          ({outputStyle: 'compressed'})))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('src/css'))

        //add sourcemaps
        .pipe(sourcemaps.write('./'))

        //live reload
        .pipe(browserSync.reload({
            stream: true
        }))
});

//watch files
gulp.task('default', ['browserSync', 'sass'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', browserSync.reload);
    gulp.watch('src/*.html', browserSync.reload);
});

//browserSync live reload
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    })
});


//Production Tasks

//clean up production folder
gulp.task('clean:prod', function() {
  return del.sync('prod');
})

//gulp-useref instead of gulp-concat to ensure correct order
//also outputs html files with one script name
gulp.task('useref', function() {
    return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('prod'))
});

//optimise images (png, jpg, svg, gif)
gulp.task('images', function() {
    return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin({
        interlaced: true
    })))
    .pipe(gulp.dest('prod/images'))
});

//send fonts folder to production
gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('prod/fonts'))
});

//send minified css to prod folder
gulp.task('css', function() {
  return gulp.src('src/css/styles.min.css')
  .pipe(gulp.dest('prod/css'))
});

//run build production folder task
gulp.task('build', function(callback) {
  runSequence('clean:prod', ['sass', 'useref', 'images', 'fonts', 'css'], callback);
});