// GulpFile Var
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var prefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


gulp.task('default', ['styles', 'script', 'templates', 'server'], function(){});

gulp.task('styles', function() {
  return sass('assets/sass/main.sass')
            .on('error', sass.logError)
            .pipe(plumber())
            .pipe(prefixer({
              browser: 'last 2 versions',
              cascade: false
            }))
            .pipe(gulp.dest('assets/css/'))
            .pipe(browserSync.reload({stream: true}));

});

gulp.task('templates', function() {
  return gulp.src('./**/*.jade')
            .pipe(jade())
            .pipe(plumber())
            .pipe(gulp.dest('./'))
            .pipe(browserSync.reload({stream: true}));
});

gulp.task('script', function(){
  return gulp.src('assets/js/*.js')
            .pipe(plumber())
            .pipe(uglify())
            .pipe(gulp.dest('assets/js-min/'))
            .pipe(browserSync.reload({stream: true}));
});

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  });

  gulp.watch('./**/*.jade', ['templates']);
  gulp.watch('./**/*.sass', ['styles']);
  gulp.watch('./assets/js/*.js', ['script']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});
