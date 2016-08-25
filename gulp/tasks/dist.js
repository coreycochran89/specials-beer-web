var gulp = require('gulp');
var gWebpack = require('gulp-webpack');
var rename = require('gulp-rename');

var config = require('../config');
var webpackConfig = require('../webpack-config');

gulp.task('dist', ['less:dist'], function() {

  webpackConfig.watch = false;

  var filter = require('gulp-filter')('**/*.js');
  var uglify = require('gulp-uglify');

  return gulp.src(config.core.src)
    .pipe(gWebpack(webpackConfig))
    .pipe(filter) // Minify only the JavaScript, not the map
    .pipe(uglify({
      mangle: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(filter.restore())
    .pipe(gulp.dest(config.core.destDist));
});
