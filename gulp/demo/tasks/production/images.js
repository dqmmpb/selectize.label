// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {images as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('demo:images:production', () => {

  browserSync.notify('Copying images');

  return gulp.src(config.production.src)
    .pipe(gulp.dest(config.production.dest));

});
