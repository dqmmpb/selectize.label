// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {styles as config}  from '../../config';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('less', () => {

  browserSync.notify('Transforming less to css');

  var remfilter = $.filter(config.development.filter.rem, {restore: true});

  return gulp.src(config.development.src)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.less({async: false}))
    .on('error', function(err) {
      console.log(err.message);
      this.emit('end');
    })
    .pipe($.autoprefixer(config.development.options.autoprefixer))
    .pipe($.sourcemaps.write())
    // 过滤掉rem.less，防止rem.less中设置的px单位转为rem单位
    .pipe(remfilter)
    .pipe($.if('*.css',$.px2rem({rootValue: 20})))
    .pipe(remfilter.restore)
    .pipe(gulp.dest(config.development.srcDest))
    .pipe(gulp.dest(config.development.dest))
    .pipe(reload({stream: true}));
});
