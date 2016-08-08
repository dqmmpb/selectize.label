import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import mainBowerFiles from 'main-bower-files';
import {lint as config}  from '../../config';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('lint', () => {
  return gulp.src(config.scripts)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
});
