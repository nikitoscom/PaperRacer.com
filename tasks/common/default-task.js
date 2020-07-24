module.exports = function(grunt) {
    grunt.registerTask('default-task', '', function() {
        grunt.task.run(['jst', 'sprite', 'concat', 'copy', 'string-replace:dev', 'less', /*'concat_css',*/ 'cachebreaker', 'string-replace:hashes', 'watch']);
    });
};