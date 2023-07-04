module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-strongly-recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser":"vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module",
        "extraFileExtensions": ['.vue'], // 添加 .vue 扩展名
        "project": 'tsconfig.json'
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    },
}
