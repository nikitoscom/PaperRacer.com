module.exports = {

    options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        globals: {
            jQuery: true,
            $: true,
            console: true
        }
    },
    '<%= pkg.name %>': {  //вставляем название проекта из package.json
        src: [ 'public/js/**/*.js' ]  //какие файлы надо проверять
    }

};