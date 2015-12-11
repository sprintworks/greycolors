var gulp = require('gulp');
var config  = require('../config').basePaths;
var minifyHTML = require('gulp-minify-html');

gulp.task('build', function() {
	var opts = {
		// conditionals: true,
		// spare: true
	};

	return gulp.src(config.html.base+'index.html')
	.pipe(minifyHTML(opts))
	.pipe(gulp.dest(config.html.dist));
});