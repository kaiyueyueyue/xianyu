//引入平台
var gulp = require('gulp');

//引入插件

var minifyJs = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var babel = require('gulp-babel');



gulp.task('minifyCss',function(){
    return gulp.src('./src/style/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('./css/'));
})

// gulp.task()

gulp.task('minifyJs',function(){
    return gulp.src('./src/js/*.js')
        .pipe(babel())
        .pipe(minifyJs())
        .pipe(gulp.dest('./js/'));
})

//自动刷新
gulp.task('fresh',['minifyCss', 'minifyJs'],function(){
    return gulp.src('./*.html').pipe(connect.reload());
})


gulp.task('default',['minifyCss'],function(){
    gulp.watch(['./src/style/*.scss','./src/js/*.js','./*.html'],['fresh']);

    connect.server({
        port:8081,
        livereload:true
    })
})

