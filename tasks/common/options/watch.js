module.exports = {

    lessApp: {
        files: ['public/dev/less/app/**'],
        tasks: ['less:apps', 'cachebreaker']
    },
    lessBook: {
        files: ['public/dev/less/book/**', 'public/dev/less/common-book-game.less'],
        tasks: ['concat:less_book', 'less:book', 'cachebreaker']
    },
    lessGame: {
        files: ['public/dev/less/game/**', 'public/dev/less/common-book-game.less'],
        tasks: ['concat:less_game', 'less:game', 'cachebreaker']
    },

    scriptApp: {
        files: ['public/dev/js/book/app/**' ],
        tasks: ['copy', 'cachebreaker']
    },
    scriptBook: {
        files: ['public/dev/js/book/**', '!public/dev/js/book/app/**' ],
        tasks: ['jst', 'concat:js_book', 'string-replace:hashes', 'cachebreaker']
    },
    scriptGame: {
        files: ['public/dev/js/game/**'],
        tasks: ['concat:js_game', 'cachebreaker']
    },


    lessTitles: {
        files: ['public/dev/less/graphic-titles.less'],
        tasks: ['concat:less_titles', 'less:titlesRU', 'cachebreaker']
    }

    //,
    //templates: {
    //    files: ['public/dev/js/book/templates/**/*.jst',
    //            'public/dev/js/book/templates/*.jst'],
    //    tasks: ['jst', 'concat:js_book']
    //},

    /*
    spriteBookContent1: {
        files: ['<%= pkg.spriteFileList.bookContent1 %>'],
        tasks: ['sprite:bookContent1', 'concat:less_book', 'less:book']
    },
    spriteBookContent2: {
        files: ['<%= pkg.spriteFileList.bookContent2 %>'],
        tasks: ['sprite:bookContent2', 'concat:less_book', 'less:book']
    },
    spriteBookContent3: {
        files: ['<%= pkg.spriteFileList.bookContent3 %>'],
        tasks: ['sprite:bookContent3', 'concat:less_book', 'less:book']
    },
    spriteBookIcons: {
        files: ['<%= pkg.spriteFileList.bookIcons %>'],
        tasks: ['sprite:bookIcons', 'concat:less_book', 'less:book']
    },
    spriteBookTitles: {
        files: ["<%= grunt.config.get('pkg.spriteFileList.bookTitles' + appLanguage) %>"],
        tasks: ['sprite:bookTitles', 'concat:less_book', 'less:book']
    },
    spriteGameTitles: {
        files: ["<%= grunt.config.get('pkg.spriteFileList.gameTitles' + appLanguage) %>"],
        tasks: ['sprite:gameTitles', 'concat:less_game', 'less:game']
    },
    spriteGameCommon: {
        files: ['<%= pkg.spriteFileList.gameCommon %>'],
        tasks: ['sprite:gameCommon', 'concat:less_game', 'less:game']
    },
    spriteGamePlay1: {
        files: ['<%= pkg.spriteFileList.gamePlay1 %>'],
        tasks: ['sprite:gamePlay1', 'concat:less_game', 'less:game']
    },
    spriteGamePlay2: {
        files: ['<%= pkg.spriteFileList.gamePlay2 %>'],
        tasks: ['sprite:gamePlay2', 'concat:less_game', 'less:game']
    },
    spriteGameCreate: {
        files: ['<%= pkg.spriteFileList.gameCreate %>'],
        tasks: ['sprite:gameCreate', 'concat:less_game', 'less:game']
    },
    spriteCommon: {
        files: ['<%= pkg.spriteFileList.common %>'],
        tasks: ['sprite:common', 'concat:less_game', 'concat:less_book', 'less:book', 'less:game']
    }*/



};