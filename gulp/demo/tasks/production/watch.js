// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {watch as config}  from '../../config';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('demo:watch:production', ['demo:browserSync:production'], () => {

  browserSync.notify('Watching files...');

  gulp.watch('bower.json', ['demo:wiredep', 'demo:fonts']);
  gulp.watch(config.less, ['demo:less']).on('change', reload);
/*  gulp.watch(config.scripts, ['scripts']).on('change', reload);*/
  gulp.watch(config.images, ['demo:images']).on('change', reload);
  gulp.watch(config.fonts, ['demo:fonts']).on('change', reload);
  gulp.watch(config.html, ['demo:html']).on('change', reload);

});
