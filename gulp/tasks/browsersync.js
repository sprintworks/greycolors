var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config  = require('../config').basePaths;

gulp.task('browser-sync', function() {
    browserSync.init([config.scss.base+'**/*.scss', config.scripts.base+'**/*.js', config.html.base+'*.html'], {
    	server: {
    		baseDir: "./src/"
    	},
    	port: 4060,
    	notify: false,
    	xip: true
    });
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});