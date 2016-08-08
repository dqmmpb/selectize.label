// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import mainBowerFiles from 'main-bower-files';
import {images as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('demo:images', () => {

  browserSync.notify('Copying images');

  return gulp.src(mainBowerFiles(config.development.filter)
    .concat(config.development.src))
    .pipe($.if($.if.isFile, $.cache($.imagemin({
        progressive: true,
        interlaced: true,
        // don't remove IDs from SVGs, they are often used
        // as hooks for embedding and styling
        svgoPlugins: [{cleanupIDs: false}]
      }))
      .on('error', function (err) {
        console.log(err);
        this.end();
      })))
    .pipe(gulp.dest(config.development.dest));

});
