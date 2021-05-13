module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        indent: [
            'error',
            4,
        ],
        'space-before-function-paren': [
            'error',
            'always',
        ],
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-empty-function': 0,
        'linebreak-style': 0,
        'no-underscore-dangle': 0,
        'prefer-destructuring': 0,
        'max-len': 0,
        'class-methods-use-this': 0,
        'no-param-reassign': [2, { props: false }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },

    parserOptions: {
        parser: '@typescript-eslint/parser',
    },

};
