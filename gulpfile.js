/**
 * AngularMaterialToasts
 * Cool material toasts for your AngularJS app
 *
 * @author Andrea SonnY <andreasonny83@gmail.com>
 * @copyright 2016 Andrea SonnY <andreasonny83@gmail.com>
 * @license MIT http://andreasonny.mit-license.org
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var openURL = require('open');
var stylish = require('jshint-stylish');
var Server = require('karma').Server;

var supported = [
  'last 2 versions',
  'safari >= 7',
  'ie >= 9',
  'ff >= 30',
  'ios 6',
  'android 4'
];

var apk = require('./bower.json');

var header = [
    '\n * ' + apk.moduleName,
    ' * ' + apk.description,
    ' *',
    ' * @author ' + apk.authors,
    ' * @copyright 2016 ' + apk.authors,
    ' * @version v' + apk.version,
    ' * @license MIT\n'
  ].join('\n');

gulp.task('clean', function() {
  del([
    '.tmp',
    'dist'
  ]);
});

gulp.task('open', function(){
  openURL('http://localhost:9000/');
});

gulp.task('start:server', ['open'], function() {
  $.connect.server({
    root: ['app', '.tmp'],
    port: 9000,
    livereload: true,
    middleware: function(connect) {
      return [connect()
        .use('/bower_components', connect.static('bower_components'))
        .use('/src', connect.static('src'))];
    }
  });
});

gulp.task('scripts', function() {
  return gulp.src([
      'src/angular-material-toasts/**/*.js',
      '!src/angular-material-toasts/test/**/*'
    ])
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish))
    .pipe($.uglify({
      preserveComments: 'license'
    }))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.header('/**<%= header %> */\n', {header: header}))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  return gulp.src('src/angular-material-toasts/**/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.cssnano({
      autoprefixer: {browsers: supported, add: true},
      safe: true
    }))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.header('/*!<%= header %> */\n', {header: header}))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles:dev', function() {
  return gulp.src('src/angular-material-toasts/**/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe($.connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html', './app/styles/main.css'], ['html']);
  gulp.watch(['./src/angular-material-toasts/**/*.css'], ['styles:dev']);
  gulp.watch(['./src/angular-material-toasts/**/*.js'], ['scripts']);
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('serve', function(cb) {
  runSequence(
    'clean',
    'styles:dev',
    'scripts',
    'start:server',
    'watch',
    cb
  );
});

gulp.task('default', function(cb) {
  runSequence(
    'clean',
    'styles',
    'scripts',
    cb
  );
});
