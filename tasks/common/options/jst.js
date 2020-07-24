module.exports = {

    frontend: {
        files: {
            'public/dev/build/_common/js/templates.js': ['public/dev/js/book/templates/**/*.jst', 'public/dev/js/book/templates/*.jst']
        }
    },
    options: {
        prettify: false,
        namespace: 'Templates',
        processName: function(filename) {
            return filename.match(/(\w+)\.jst$/i)[1];
        },
        processContent: function(src) {
            return src/*.replace(/(?:\r\n|\r|\n)/g, ' ').*/.replace(/\s+/gi, ' ');
        }
    }

};