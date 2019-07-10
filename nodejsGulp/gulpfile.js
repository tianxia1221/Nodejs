var gulp = require('gulp');
var uglify = require('gulp-uglify');

console.log("-----------------");

// 默认任务
gulp.task('default', function() {
  // 所有默认任务的代码放在这里，比如我输出一个 hello, wold
  console.log('hello, world');
});

// 复制 assets/global/img 文件的匹配示例
// assets/global/img/**/* assets/global/img 目录下的所有子目录和所有东西(包含东西最多) 
// assets/global/img/*/* assets/global/img 目录下的东西和子目录下的东西 
// assets/global/img/*.{png,jpg} images目录下的所有以png和jpg为后缀名的图片  
gulp.task('js',function(){ 
    return gulp.src(['node_modules/ansi-colors/*.js']) 
	  .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});