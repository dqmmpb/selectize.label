// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {tar as config}  from '../../config';

const $ = gulpLoadPlugins();

//打包成tar.gz压缩包到tar目录下
gulp.task('demo:tar', ['demo:tar:clean'],function(){

  browserSync.notify('Building tar');

  return gulp.src(config.production.src)
    .pipe($.tar(config.name))
    .pipe($.gzip())
    .pipe(gulp.dest(config.production.dest));
});

//删除tar目录
gulp.task('demo:tar:clean', del.bind(null, config.production.dest));

gulp.task('demo:prod', function(cb) {
  $.sequence('demo:publish', 'demo:tar', cb);
});
