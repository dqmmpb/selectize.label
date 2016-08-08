// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import mainBowerFiles from 'main-bower-files';
import {extras as config}  from '../../config';

const $ = gulpLoadPlugins();


gulp.task('demo:extras:resources:production', () => {

  browserSync.notify('Extras resources files');

  return gulp.src(config.production.resources.src, {
    dot: true
  }).pipe(gulp.dest(config.production.resources.dest));
});


gulp.task('demo:extras:production', ['demo:extras:resources:production'], () => {

  browserSync.notify('Extras other files');

  return gulp.src(config.production.src, {
    dot: true
  }).pipe(gulp.dest(config.production.dest));
});
