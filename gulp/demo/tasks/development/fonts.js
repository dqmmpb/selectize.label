// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import mainBowerFiles from 'main-bower-files';
import {fonts as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('demo:fonts', () => {

  browserSync.notify('Copying fonts');

  return gulp.src(mainBowerFiles(config.development.filter)
    .concat(config.development.src))
    .pipe(gulp.dest(config.development.dest));
});
