var gulp = require('gulp');
var electron = require('electron-connect').server.create({
    port: 5858,
    path: './server/index.js'
});

gulp.task('server:watch', function () {
    electron.start();
    gulp.watch(['./server/**/*.js'], electron.restart);
});

