var gulp = require('gulp');
var KarmaSrv = require('karma').Server;
 
// 运行测试
gulp.task('test', function (done) {
  new KarmaSrv({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


gulp.task('default',['test']);


