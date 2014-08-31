/*
* Declaro mis dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*
* Configuro la tarea 'demo'
*/

gulp.task('demo', function () {
	gulp.src('js/source/*.js')
	.pipe(concat())
	.pipe(uglify())
	.pipe(gulp.dest('js/build/todo.js'))
});