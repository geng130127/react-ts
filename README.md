# Webpack5 + React17

## package.json文件中 lint-eslint | lint-stylelint 命令

```
// 只针对与某个文件夹内校验
{
   "scripts": {
        "lint": "npm run lint-eslint && npm run lint-stylelint",
        "lint-eslint": "eslint -c .eslintrc.js --ext .ts,.tsx,.js src",
        "lint-stylelint": "stylelint --config .stylelintrc.js src/**/*.{less,css,scss}"
  }, 
}
```

```
// 全局校验
{
   "scripts": {
        "lint": "npm run lint-eslint && npm run lint-stylelint",
        "lint-eslint": "eslint -c .eslintrc.js --ext .ts,.tsx,.js --ignore-path .eslintignore .",
        "lint-stylelint": "stylelint --config .stylelintrc.js **/*.{less,css,scss}"
  }, 
}
```

## WebStorm 中 StyleLint 快捷键

鼠标浮动在不符合规范的样式上，然后使用快捷键

>  Alt+Enter
