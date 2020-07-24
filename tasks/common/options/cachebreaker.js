module.exports = {

    dev: {
        options: {
            match: ['styles-book.css', 'styles-game.css',  'styles.css',
                    'script-book-app.js', 'script-book-site.js', 'script-game.js',
                    'init.js', 'guideline.js', 'translation.js', 'ads.js']
        },
        files: {
            src: [
                'public/assets/frame/create.php',
                'public/assets/frame/play.php',
                'public/assets/app/**/*.php',
                'public/assets/index.php'
            ]
        }
    }

};