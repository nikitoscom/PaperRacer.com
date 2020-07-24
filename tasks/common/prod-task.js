module.exports = function(grunt) {
    grunt.registerTask('prod-task', '', function() {
        grunt.task.run(['jst', 'sprite', 'concat', 'copy', 'string-replace:prod',/* 'closureCompiler', */'uglify', 'less', /*'concat_css',*/ 'cssmin',  'rename', 'cachebreaker', 'string-replace:hashes', 'exec']);
       // grunt.task.run(['closureCompiler']);
    });

};
