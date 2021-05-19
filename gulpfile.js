var gulp = require('gulp');
gulp.task('default', ['lint']);
// function() {
// console.log('Hello Gulp!');
// });

var tslint = require('gulp-tslint');
gulp.task('lint', function() {
return gulp.src([
'./source/ts/**/**.ts', './test/**/**.test.ts'
]).pipe(tslint())
.pipe(tslint.report('verbose'));
});

var ts = require('gulp-typescript');
var tsProject = ts.createProject({
removeComments : true,
noImplicitAny : true,
target : 'ES3',
module : 'commonjs',
declarationFiles : false
});

gulp.task('tsc', function() {
    return gulp.src('./source/ts/**/**.ts')
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('./temp/source/js'));
    });