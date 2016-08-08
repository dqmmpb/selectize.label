// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {clean as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('clean:production', del.bind(null, config.production.files));
