// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';

gulp.task('demo:help', () => {

  console.log('##');
  console.log('## development 开发环境脚本说明');
  console.log('##');

  console.log('	gulp browserSync            浏览器同步测试工具');
  console.log('	gulp build	            文件编译（开发环境）');
  console.log('	gulp clean	            文件清理（开发环境），但不包括iconfont相关');
  console.log('	gulp extras	            其他文件（开发环境）');
  console.log('	gulp fonts	            字体文件（开发环境）');
  console.log('	gulp html 	            页面文件');
  console.log('	gulp help	            gulp参数说明');
  console.log('	gulp iconfont	            字体图标生成');
  console.log('	gulp iconfont:clean	    字体文件清理');
  console.log('	gulp images	            图片文件');
  console.log('	gulp less	            less文件编译');
  console.log('	gulp lint	            eslint语法检查');
  console.log('	gulp serve	            启动测试serve');
  console.log('	gulp watch	            文件监控');
  console.log('	gulp wiredep                css&js依赖注入');


  console.log('##');
  console.log('## production 生产环境脚本说明');
  console.log('##');

  console.log('	gulp browserSync:production    浏览器同步测试工具');
  console.log('	gulp build:production	       文件编译（生产环境）');
  console.log('	gulp clean:production	       文件清理（生产环境）');
  console.log('	gulp extras:production	       其他文件（生产环境）');
  console.log('	gulp fonts:production	       字体文件（生产环境）');
  console.log('	gulp html:production 	       页面文件');
  console.log('	gulp images:production	       图片文件');
  console.log('	gulp publish:production	       文件发布');
  console.log('	gulp serve:production	       启动测试serve');
  console.log('	gulp watch:production	       文件监控');


  console.log('##');
  console.log('## 其他脚本说明');
  console.log('##');

  console.log('	gulp tar	    文件打包，打包为tar.gz文件');
  console.log('	gulp tar:clean	    打包文件tar.gz清理');
  console.log('	gulp prod         文件编译（先调用publish，再调用tar）');
  console.log('	gulp default        文件编译（默认开发环境）');
  console.log('	gulp publish        文件编译（生产环境）');

});
