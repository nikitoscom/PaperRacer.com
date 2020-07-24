module.exports = {
    //описываем работу плагина конкатенации
    js_book: {
        src: [
            //'public/assets/js/3rd-party/firebugx.js',
            //'public/assets/js/3rd-party/jquery.min.js', // 93 Kb 1.11.1 Важно должна быть версия
            'public/assets/js/3rd-party/jquery.js',

            'public/assets/js/3rd-party/underscore.js', // |__ 71 Kb
            'public/assets/js/3rd-party/backbone.js',   // |
            //'public/assets/js/3rd-party/backbone-routing.js', // на 12Kb меньше


            //'public/assets/js/3rd-party/plugins/i18next.js',
            'public/assets/js/3rd-party/plugins/intro.js', // 27.2 kb
            'public/assets/js/3rd-party/plugins/jquery.browser.js',
            //'public/assets/js/3rd-party/plugins/jquery.jplayer.js', // 183 Kb
            //'public/assets/js/3rd-party/plugins/jquery.jplayer.playlist.js',
            //'public/dev/js/book/natebook-layout/twentythings.pageflip-working.js', // 29.73 kb
            'public/dev/js/book/natebook-layout/pageflip.min.js', // 10 Kb
            //'public/dev/js/book/mobile/flip-page.js',
            'public/dev/js/book/app.js', // 20 Kb
            'public/assets/js/guideline.js', // 18 Kb
            'public/dev/build/_common/js/templates.js',// 17.46 kb
            'public/dev/js/book/models/*.js',
            'public/dev/js/book/views/**/*.js',
            'public/dev/js/common/*.js',
            'public/dev/js/book/player.js',
            'public/dev/js/book/router.js' // 32Kb
        ],  // какие файлы конкатенировать
        dest: 'public/assets/app/_common/js/script-book-app.js'  // куда класть файл, который получиться после процесса конкатенации
    },
    js_game:{
        src:
            [
                'public/dev/js/game/OS.js',
                'public/dev/js/common/*.js',
                'public/dev/js/game/OS.ModeCareer.js',
                'public/dev/js/game/OS.ModeCatalog.js',
                'public/dev/js/game/OS.ModeDraw.js',
                'public/dev/js/game/OS.ModeDuel.js',
                'public/dev/js/game/OS.ModePlay.js',
                ////////////////////////////////////
                'public/dev/js/game/OS.Vehicles/*',
                'public/dev/js/game/OS.PaintBrush/*.js',
                'public/dev/js/game/OS.Touches/*.js',
                'public/dev/js/game/OS.Engine/OS.Engine.js',
                'public/dev/js/game/OS.Engine/OS.Engine.DrawScene.js',
                'public/dev/js/game/OS.Engine/OS.Engine.DrawBackground.js',
                'public/dev/js/game/OS.Engine/OS.Engine.Erase.js',
                'public/dev/js/game/OS.Engine/OS.Engine.SaveStageToString.js',
                'public/dev/js/game/OS.Engine/OS.Engine.DeadDriver.js',
                'public/dev/js/game/OS.Engine/OS.Engine.DrawText.js',
                'public/dev/js/game/OS.Engine/OS.Engine.Elements.js',
                'public/dev/js/game/OS.Engine/OS.Engine.Sounds.js',
                'public/dev/js/game/OS.Engine/OS.Engine.OnEvents.js',
                'public/dev/js/game/OS.Engine/OS.Engine.InitVehicleSavePoints.js'
            ],

        // [OPTIONAL] set an output file
        dest: 'public/assets/app/_common/js/script-game.js'
    },
    less_book: {
        src: [
            "public/dev/build/_common/less/sprite-common.less",
            "public/dev/build/_common/less/sprites/*.less",
            "public/dev/less/init.less",
            "public/dev/less/common-book-game.less",
            "public/dev/build/_lang/RU/less/sprites/*.less",
            "public/dev/less/book/*.less",
            "public/dev/less/book/**/*.less"
        ],
        dest: "public/dev/build/_common/less/all-book.less"
    },
    less_game: {
        src: [
            "public/dev/build/_common/less/sprite-common.less",
            "public/dev/build/_common/less/sprites/*.less",
            "public/dev/less/init.less",
            "public/dev/less/common-book-game.less",
            "public/dev/build/_lang/RU/less/sprites/*.less",
            "public/dev/less/game/*.less",
            "public/dev/less/game/**/*.less"
        ],
        dest: "public/dev/build/_common/less/all-game.less"
    },
    less_titles: {
        src: [
            "public/dev/build/_lang/RU/less/sprites/sprite-game-titles.less",
            "public/dev/build/_lang/RU/less/sprites/sprite-book-titles.less",
            "public/dev/less/graphic-titles.less"
        ],
        dest: "public/dev/build/_lang/RU/less/titles.less"
    }
};