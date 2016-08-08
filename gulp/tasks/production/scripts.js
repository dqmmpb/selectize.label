// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {scripts as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('scripts:production', () => {

  browserSync.notify('Copying scripts and minify');

  return gulp.src(config.production.src)
    .pipe(gulp.dest(config.production.dest))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.production.dest));
});
