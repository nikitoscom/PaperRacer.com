module.exports = {

    options: {
        compilerFile: 'node_modules/grunt-closure-tools/compiler.jar',
            compilerOpts: {
            /**
             * Keys will be used as directives for the compiler
             * values can be strings or arrays.
             * If no value is required use null
             *
             * The directive 'externs' is treated as a special case
             * allowing a grunt file syntax (<config:...>, *)
             *
             * Following are some directive samples...
             */
            //compilation_level: 'SIMPLE_OPTIMIZATIONS',
            compilation_level: 'ADVANCED_OPTIMIZATIONS',
                //compilation_level: 'WHITESPACE_ONLY',
                //define: ["'goog.DEBUG=false'"],

                //warning_level: 'verbose',
                jscomp_off: ['checkTypes', 'fileoverviewTags'],
                summary_detail_level: 3,
                output_wrapper: '"(function(){%output%}).call(this);"'
        },
        execOpts: {
            /**
             * Set maxBuffer if you got message "Error: maxBuffer exceeded."
             * Node default: 200*1024
             */
            maxBuffer: 999999 * 1024
        }
    },
/*    game: {


        TEMPcompilerOpts: {
            externs: ['public/dev/js/game/externs/*.js']
        },

        // [OPTIONAL] Target files to compile. Can be a string, an array of strings
        // or grunt file syntax (<config:...>, *)

        src:
            ['public/dev/js/book/natebook-layout/twentythings.pageflip-working.js'],
        // [OPTIONAL] set an output file
        dest: 'public/dev/js/book/natebook-layout/pageflip.min.js'

    }*/
    game: {


        // *[OPTIONAL] Here you can add new or override previous option of the Closure Compiler Directives.
        // * IMPORTANT! The feature is enabled as a temporary solution to [#738](https://github.com/gruntjs/grunt/issues/738).
        // * As soon as issue will be fixed this feature will be removed.

        TEMPcompilerOpts: {
            externs: ['public/dev/js/game/externs/*.js']
        },

        // [OPTIONAL] Target files to compile. Can be a string, an array of strings
        // or grunt file syntax (<config:...>, *)

        src:
            ['public/assets/app/_common/js/script-game.js'],
        // [OPTIONAL] set an output file
        dest: 'public/assets/app/_common/js/script-game.min.js'

    },
    book: {
        TEMPcompilerOpts: {
            charset: 'utf-8',
            compilation_level: 'SIMPLE_OPTIMIZATIONS'
        },

        // [OPTIONAL] Target files to compile. Can be a string, an array of strings
        // or grunt file syntax (<config:...>, *)

        src:
            ['public/assets/app/_common/js/script-book-app.js'],
        // [OPTIONAL] set an output file
        dest: 'public/assets/app/_common/js/script-book-app.min.js'

    }
//*/
};