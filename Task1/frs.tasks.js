//custom tasks definitions
module.exports = function(appData) {
  //remove views task
  // appData.app.taskRegUtils.removeTask('views');

  //create a task
//  appData.taskReg['rollup'] = {
//    fn() {
//      // task body...
//      // remember to return a promise
//        var stream = appData.gulp.src(appData.dirs.src.js)
//          .pipe(appData.gulp.dest('./dest/js/app.js'));
//
//        //you can also access config, e.g. check if dev vs. prod mode
//        //console.log(appData.config.main.isDev);
//
//        //currently all tasks must return a promise
//        return appData.app.streamToPromise(stream);
//    }
//  }
//  
// 
//  //add the task as a dependency: build task, before images dependency
//  appData.app.taskRegUtils.addDep('rollup', 'build', 'js', true);

}
