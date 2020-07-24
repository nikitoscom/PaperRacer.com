module.exports = {
    my_target: {
        files: [{
            expand: true,
            cwd: 'public/assets/app/',
            src: ['**/*.js', '!_common/**'],
            dest: 'public/assets/app/'
        }]
    }
};