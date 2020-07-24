module.exports = {

    options: {
        // Task-specific options go here.
    },
    cordova: {
        src: [
            'public/assets/app/_common/css/styles-book.css',
            'public/assets/app/site/styles-book.css'
        ],
        dest: 'public/assets/app/cordova/styles.css'
    },
    cordovaRU: {
        src: [
            'public/assets/app/_common/css/styles-book.css',
            'public/assets/app/_lang/RU/styles.css',
            'public/assets/app/site/styles-book.css'
        ],
        dest: 'public/assets/app/cordova/styles_ru.css'
    }

};