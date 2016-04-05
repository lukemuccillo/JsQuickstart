var gulp = require('gulp');

var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

var bases = {
	app: "_app",
	tests: "_tests"
};

gulp.task('mocha', function() {
	return gulp.src(
		[
			bases.tests + '/*.js'
		], { read: false }
	).pipe(mocha({ reporter: 'list' }))
	.on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
	gulp.watch(
	[
		bases.app + '/**', 
		bases.tests + '/**'], 
	['mocha']);
});

gulp.task('default', function() {
});

