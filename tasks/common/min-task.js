module.exports = function(grunt) {
    grunt.registerTask('min-task', '', function() {
        grunt.task.run(['jst', 'sprite', 'concat', 'string-replace:dev', 'closureCompiler', 'less', /*'concat_css',*/ 'cssmin', 'rename', 'cachebreaker', 'string-replace:hashes',  'exec']);
    });
};
