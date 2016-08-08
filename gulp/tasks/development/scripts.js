// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {scripts as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('scripts', () => {

  browserSync.notify('Copying scripts');

  return gulp.src(config.development.src)
/*    .pipe($.useref({searchPath: config.development.useref.searchPath}))
    .pipe(jsfilter)
    .pipe($.if('*.js', $.uglify()))
    .pipe(jsfilter.restore)
    .pipe(cssfilter)
    .pipe($.if('*.css', $.cleanCss({compatibility: '*', advanced: false})))
    .pipe(cssfilter.restore)*/
    /*.pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))*/
    .pipe(gulp.dest(config.development.dest));
});
