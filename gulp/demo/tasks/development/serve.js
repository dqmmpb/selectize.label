// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {browsersync as config}  from '../../config';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;


gulp.task('serve', () => {
  gulp.start('demo:watch');
});
