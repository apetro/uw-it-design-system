const gulp        = require('gulp');
const sass        = require('gulp-sass');
const livereload  = require('gulp-livereload');
const minify      = require('gulp-minify');
const jshint      = require('gulp-jshint');

const paths = {
  scripts: './assets/scripts/**/*.js',
  styles: './assets/styles/**/*.scss'
};

/*

  Development Tasks

*/
gulp.task('dev-styles', () => {
  return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(livereload());
});

gulp.task('dev-scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(livereload());
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch(paths.styles, ['dev-styles']);
  gulp.watch(paths.scripts, ['dev-scripts']);
});

/*

  Production Build Tasks

*/
gulp.task('min-styles', () => {
  return gulp.src(paths.styles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('min-scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(minify({
        noSource: true,
        ext:{
            src:'.js',
            min:'.js'
        }
    }))
    .pipe(gulp.dest('dist/scripts'))
});




// The default task (called when you run `gulp` from cli)
gulp.task('default', ['dev-styles', 'dev-scripts']);
gulp.task('dev', ['default', 'watch']);
gulp.task('prod', ['min-styles', 'min-scripts']);