var gulp    = require('gulp');
var compass = require('gulp-compass');
var sass    = require('gulp-ruby-sass');
var browserSync    = require('browser-sync');
var reload         = browserSync.reload;

var sources = {
  sass: './sass/*.scss'
}

gulp.task('compass', function() {
  var stream =  gulp.src(sources.sass)

  .pipe(compass({
    css: 'css',
    sass: 'sass',
    require: ['susy']
  }))
  .pipe(reload({stream:true}));
  return stream;
});

gulp.task('serve',['compass', 'watch'], function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['compass']);
  gulp.watch("./*.html", function() {
    reload();  
  });
  gulp.watch("./js/*.js", function() {
    reload();  
  });
});
