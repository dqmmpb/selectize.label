// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import urlAdjuster from 'gulp-css-url-adjuster';
import {styles as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('css:production', () => {

  browserSync.notify('Copying css and minify');

  /**
   * 替换合并后css中引用img的路径，'gulp images'已将依赖css中的png,jpg,svg,jpeg,gif等图片统一复制到images中
   * 对于不同依赖css中使用了同名文件的情况，暂时没有办法，先作为bug吧
   * @param url
   * @returns {*}
   */
  var cssUrlReplace = function(url) {
    // 正则表达式数组
    var regExps = config.production.cssUrlReplace.regExps;
    for(var i = 0; i < regExps.length; i++) {
      var regExp = regExps[i];
      if(regExp.test(url)) {
        return url.replace(regExp, config.production.cssUrlReplace.newPath);
      }
    }
    return url;
  };

  return gulp.src(config.production.src)
    .pipe(urlAdjuster({replace: cssUrlReplace}))
    .pipe(gulp.dest(config.production.dest))
    .pipe($.cleanCss({compatibility: '*', advanced: false}))
    .pipe($.rename({suffix: '.min'}))
    /*.pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))*/
    .pipe(gulp.dest(config.production.dest));

});
