module.exports = {
    assets: [
        {
            filter: '**/*.js',
            dev: 'js/rollup',
            prd: '@dev js/babel js/uglify'
        },
        {
            filter: '**/*.css',
            dev: 'css/sass css/prefix',
            prd: '@dev css/optimize'
        }
    ]
}