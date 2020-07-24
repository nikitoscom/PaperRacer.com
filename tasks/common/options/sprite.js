//var timestamp = Date.now();

module.exports = {


    bookContent1: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-book-content1.png?<%=timestamp%>',

        src: '<%= pkg.spriteFileList.bookContent1 %>',

        destImg: 'public/assets/app/_common/img/sprite-book-content1.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-book-content1.less",
        cssFormat: 'less'
    },
    bookContent2: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-book-content2.png?<%=timestamp%>',

        src: '<%= pkg.spriteFileList.bookContent2 %>',

        destImg: 'public/assets/app/_common/img/sprite-book-content2.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-book-content2.less",
        cssFormat: 'less'
    },
    bookContent3: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-book-content3.png?<%=timestamp%>',

        src: '<%= pkg.spriteFileList.bookContent3%>',

        destImg: 'public/assets/app/_common/img/sprite-book-content3.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-book-content3.less",
        cssFormat: 'less'
    },

    bookIcons: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-book-icons.png?<%=timestamp%>',

        src: '<%= pkg.spriteFileList.bookIcons %>',

        destImg: 'public/assets/app/_common/img/sprite-book-icons.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-book-icons.less",
        cssFormat: 'less'
    },


    bookTitlesRU: {
        padding: 10,
        imgPath: '/app/_lang/RU/img/sprite-book-title.png?<%=timestamp%>',
        src: "<%= grunt.config.get('pkg.spriteFileList.bookTitlesRU') %>",
        destImg: 'public/assets/app/_lang/RU/img/sprite-book-title.png',
        destCSS: "public/dev/build/_lang/RU/less/sprites/sprite-book-titles.less",
        cssFormat: 'less'
    },
    gameTitlesRU: {
        padding: 10,
        imgPath: '/app/_lang/RU/img/sprite-game-title.png?<%=timestamp%>',
        src: "<%= grunt.config.get('pkg.spriteFileList.gameTitlesRU') %>",
        destImg: 'public/assets/app/_lang/RU/img/sprite-game-title.png',
        destCSS: "public/dev/build/_lang/RU/less/sprites/sprite-game-titles.less",
        cssFormat: 'less'
    },




    gameCommon: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-game-common.png?<%=timestamp%>',

        src: '<%= pkg.spriteFileList.gameCommon %>',

        destImg: 'public/assets/app/_common/img/sprite-game-common.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-game-common.less",
        cssFormat: 'less'
    },
    gamePlay1: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-game-play1.png?<%=timestamp%>',

        src: '<%= pkg.spriteFileList.gamePlay1 %>',

        destImg: 'public/assets/app/_common/img/sprite-game-play1.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-game-play1.less",
        cssFormat: 'less'
    },
    gamePlay2: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-game-play2.png?<%=timestamp%>',

        src: '<%= pkg.spriteFileList.gamePlay2 %>',

        destImg: 'public/assets/app/_common/img/sprite-game-play2.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-game-play2.less",
        cssFormat: 'less'
    },
    gameCreate: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-game-create.png?<%=timestamp%>',

        src: '<%= pkg.spriteFileList.gameCreate %>',

        destImg: 'public/assets/app/_common/img/sprite-game-create.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-game-create.less",
        cssFormat: 'less'
    },
    /*heartAnimation: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-heart-animation.png?' + timestamp,

        src: '<%= pkg.spriteFileList.heartAnimation %>',
        algorithmOpts: {sort: false},

        destImg: 'public/assets/app/_common/img/sprite-heart-animation.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-heart-animation.less",
        cssFormat: 'less'
    },
    boxAnimation: {
        padding: 10,
        imgPath: '/app/<%=appName%>/img/sprite-box-animation.png?<%=timestamp%>',

        src: '<%= pkg.spriteFileList.boxAnimation %>',
        algorithmOpts: {sort: false},

        destImg: 'public/assets/app/_common/img/sprite-box-animation.png',
        destCSS: "public/dev/build/_common/less/sprites/sprite-box-animation.less",
        cssFormat: 'less'
    },*/
    common: {
        padding: 10,
        imgPath: '/app/_common/img/sprite-common.png?<%=timestamp%>',

        src: "<%= pkg.spriteFileList.common %>",

        destImg: 'public/assets/app/_common/img/sprite-common.png',
        destCSS: "public/dev/build/_common/less/sprite-common.less",
        cssFormat: 'less'
    }
};