// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {stream as wiredep} from 'wiredep';
import {wiredep as config}  from '../../config';

gulp.task('demo:wiredep', () => {

  browserSync.notify('Inject bower components');

  gulp.src(config.src)
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest(config.dest));
});

