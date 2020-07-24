module.exports = {

    main: {
        files: [
            {
                expand: true,
                cwd: 'public/dev/js/book/app/',
                src: ['**'],
                dest: 'public/assets/app/'
            }
        ]
    }
};