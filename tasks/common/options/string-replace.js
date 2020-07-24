module.exports = {
    prod: {
        files: {
            'public/assets/': [
                'public/assets/app/_common/js/script-book-app.js',
                'public/assets/app/_common/js/script-game.js'
                ]

        },
        options: {
            replacements: [{
                pattern: '$isProductionSettings = ',
                replacement: '$isProductionSettings = true; //'
            }, {
                pattern: '$isAsiaSettings = ',
                replacement: '$isAsiaSettings = false; //'
            }, {
                pattern: 'spriteTimestamp = ',
                replacement: 'spriteTimestamp = <%=timestamp%>; //'
            }]
        }
    },

    dev: {
        files: {
            'public/assets/': [
                'public/assets/app/_common/js/script-book-app.js',
                'public/assets/app/_common/js/script-game.js'
                ]

        },
        options: {
            replacements: [{
                pattern: '$isProductionSettings = ',
                replacement: '$isProductionSettings = false; //'
            }, {
                pattern: '$isAsiaSettings = ',
                replacement: '$isAsiaSettings = false; //'
            }, {
                pattern: 'spriteTimestamp = ',
                replacement: 'spriteTimestamp = <%=timestamp%>; //'
            }]
        }
    },
    hashes: {
        files: {
            'public/assets/app/_common/js/script-book-site.js': ['public/assets/app/_common/js/script-book-app.js']
        },
        options: {
            replacements: [{
                pattern: /#\//g,
                replacement: '/'
            }]
        }
    }
};

/*
 asia: {
 files: {
 'public/assets/': [
 'public/assets/app/<%=appName%>/js/script-book.js',
 'public/assets/app/<%=appName%>/js/script-game.js',
 'public/assets/config/settings.php']
 },
 options: {
 replacements: [{
 pattern: '$isProductionSettings = ',
 replacement: '$isProductionSettings = true; //'
 }, {
 pattern: '$isAsiaSettings = ',
 replacement: '$isAsiaSettings = true; //'
 }, {
 pattern: 'spriteTimestamp = ',
 replacement: 'spriteTimestamp = <%=timestamp%>; //'
 }]
 }
 },
 */