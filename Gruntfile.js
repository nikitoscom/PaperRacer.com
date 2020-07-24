var timestamp = Date.now();

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    var timestamp = Date.now();

    function loadConfig(path) {
        var glob = require('glob');
        var object = {};
        var key;
        glob.sync('*', {cwd: path}).forEach(function(option) {
            key = option.replace(/\.js$/,'');
            object[key] = require(path + option);
        });
        return object;
    }

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        env: process.env,
        timestamp: timestamp
    };

    /*grunt.initConfig({
    pngquant:{
            options: {
                concurrency: 8,             // specify how many exucutables get spawned in parallel
                colors: 128,                // reduce colors to 128
                ext: '.png',                // use .png as extension for the optimized files
                quality: '65-80',           // output quality should be between 65 and 80 like jpeg quality
                speed: 10                  // pngquant should be as fast as possible
            },
            files: [
                {
                    src: 'public/assets/app/<%=appName%>/img/sprite-book-title.png',
                    dest: 'public/assets/app/<%=appName%>/img-min/'
                }
            ]
    }});*/

    ///*

    grunt.util._.extend(config, loadConfig('./tasks/common/options/'));
    grunt.initConfig(config);
    grunt.loadTasks('tasks/common');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('pngmin', ['pngmin-task']);
    grunt.registerTask('min', ['min-task']);
    grunt.registerTask('prod', ['prod-task']);
    grunt.registerTask('default', ['default-task']);


};





















//console.log('---->',grunt.cli.tasks);


/*if (grunt.cli.tasks[0] == 'site'){
 appName = 'site_RU';
 appHash = "/";
 }

 if (grunt.cli.tasks[0] == 'site-prod'){
 appName = 'site_RU';
 appHash = "/";
 }*/

/*    if (grunt.cli.tasks[0] == 'admin'){
 appName = 'admin';
 }

 if (grunt.cli.tasks[0] == 'admin-prod'){
 appName = 'admin';
 }
 */