import gulp from 'gulp';
import gutil from 'gulp-util';
import less from 'gulp-less';
import watch from 'gulp-watch';
import batch from 'gulp-batch';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import tsify from 'tsify';

gulp.task('browserify', () => {
    return browserify({
        entries: 'source/bootstrap.ts',
        debug: true
    })
        .plugin(tsify, {
            target: 'es5',
            experimentalDecorators: true
        })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red.bold('[browserify error]'));
            gutil.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('less', function () {
    return gulp.src('./source/less/styles.less')
        .pipe(less())
        .on('error', function(err) {
            // Handle less errors, but do not stop watch task
            gutil.log(gutil.colors.red.bold('[Less error]'));
            gutil.log(gutil.colors.bgRed('filename:') +' '+ err.filename);
            gutil.log(gutil.colors.bgRed('lineNumber:') +' '+ err.lineNumber);
            gutil.log(gutil.colors.bgRed('extract:') +' '+ err.extract.join(' '));
            this.emit('end');
        })
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', () => {
    watch('./source/**/*.ts', batch(function (events, done) {
        gulp.start('browserify', done);
    }));
    watch('./source/less/*.less', batch(function (events, done) {
        gulp.start('less', done);
    }));
});

gulp.task('build', ['browserify', 'less']);
gulp.task('default', ['build', 'watch']);
