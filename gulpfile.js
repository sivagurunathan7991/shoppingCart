let gulp = require('gulp'),
sass = require('gulp-sass'),
rename = require('gulp-rename'),
cssmin = require('gulp-cssnano'),
prefix = require('gulp-autoprefixer');

function styles() {
    return (
        gulp.src(["sass/*.scss"])
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('css/'))
            .pipe(cssmin())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('css'))
    );
}
exports.styles = styles;

function watch(){
    gulp.watch('sass/**', styles)
}
    
exports.watch = watch
