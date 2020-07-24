module.exports = {

    book: {
        options: {
            paths: ["public/less"],
            yuicompress: true
        },
        files: {
            "public/assets/app/_common/css/styles-book.css":
                [   'public/dev/css/reset.css',
                    'public/dev/css/introjs.css',
                    //'public/dev/css/jplayer-styles.css',
                    "public/dev/build/_common/less/all-book.less"]
        }
    },
    game: {
        options: {
            paths: ["public/less"],
            yuicompress: true
        },
        files: {
            "public/assets/app/_common/css/styles-game.css":
                [   'public/dev/css/reset.css',
                    'public/dev/css/animate.css',
                    'public/dev/css/introjs.css',
                    'public/dev/css/color-picker.css',
                    "public/dev/build/_common/less/all-game.less"]
        }
    },

    titlesRU: {
        options: {
            paths: ["public/less"],
            yuicompress: true
        },
        files: {
            "public/assets/app/_lang/RU/styles.css":
                [   "public/dev/build/_lang/RU/less/titles.less"]
        }
    },

    apps: {
        options: {
            strictMath: true
        },
        files: [{
            expand: true,
            cwd: 'public/dev/less/app/',
            src: ['**/*.less'],
            ext: '.css',
            dest: 'public/assets/app/',
            extDot: 'first'
        }]
    }

};