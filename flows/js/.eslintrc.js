module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        indent: [
            'warn',
            4,
            { "SwitchCase": 1 }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        semi: [
            'error',
            'never'
        ],
        'no-console': 'off',
        eqeqeq: 'error'
    }
}