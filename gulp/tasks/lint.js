var gulp = require('gulp');

var jscs = require('gulp-jscs');
var jscsStylish = require('gulp-jscs-stylish');
var noop = function() {};

var jshint = require('gulp-jshint');

var config = require('../config').js;

gulp.task('lint', function () {

  gulp.src(config.src)
    .pipe(jscs())
    .on('error', noop)
    .pipe(jshint())
    .pipe(jscsStylish.combineWithHintResults())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint:dist', function () {

  return gulp.src(config.src)
    .pipe(jscs())
    .on('error', noop)
    .pipe(jshint())
    .pipe(jscsStylish.combineWithHintResults())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
