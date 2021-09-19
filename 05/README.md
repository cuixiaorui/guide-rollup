# With NPM Packages

解析 npm 包

默认 rollup 是不解析 npm packages 里面的库的

是只用一个 require 来加载的
```js
var answer = require('the-answer');
```

如果想也解析 npm packages 里面的库的话

就需要使用 @rollup/plugin-node-resolve

---

因为 rollup 是只支持 esm 的，但是有的库是使用的 commonJs 规范，所以 rollup 是理解不了的

需要把 commonJs 转换成 ES2015

使用  @rollup/plugin-commonjs 来处理

请注意，大多数情况下 @rollup/plugin-commonjs 应该在转换模块的其他插件之前 - 这是为了防止其他插件进行破坏 CommonJS 检测的更改。 这个规则的一个例外是 Babel 插件，如果你正在使用它，那么把它放在 commonjs 插件之前。


