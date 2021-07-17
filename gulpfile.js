var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('css', function () {
    var processors = [
        autoprefixer({overrideBrowserslist: "last 8 versions"})
    ];
    return gulp.src('./src/Main/*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('./src/dest'));
  });