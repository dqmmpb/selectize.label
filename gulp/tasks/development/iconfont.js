// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {iconfont as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('iconfont', ['iconfont:clean'], () => {

  browserSync.notify('Compiling iconfont');

  return gulp.src(config.development.src)
    .pipe($.iconfontCss({
      fontName: config.fontname,
      path: config.iconfontCss.path,
      targetPath: config.iconfontCss.targetPath,
      fontPath: config.iconfontCss.fontPath
    }))
    .pipe($.iconfont({
      fontName: config.fontname,
      formats: config.formats,
      normalize: true,
      fontHeight: 1001
    }))
    .pipe(gulp.dest(config.development.dest));
});

gulp.task('iconfont:clean', del.bind(null, config.files));
