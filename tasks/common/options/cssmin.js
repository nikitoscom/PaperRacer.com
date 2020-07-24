module.exports = {
//описываем работу плагина минификации и конкатенации css.
    apps: {
        expand: true,
        cwd: 'public/assets/app/',
        src: ['**/*.css'],
        dest: 'public/assets/app/',
        ext: '.css'
    }
};