# Nuxtの始め方

```
vue init nuxt-community/starter-template <project-name>
```

## Nuxtでのjestの導入方法

1. 必要なライブラリをインストール
```
yarn add -D jest jest-vue-preprocessor babel-jest vue-test-utils
```

2. jest.config.jsを追加

```
// jest.config.js
const {defaults} = require('jest-config')
module.exports = {
  // ...
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'vue', 'ts', 'tsx'],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor"
  }
}

```

3. .babelrcを追加

```
{
  "presets": ["env"]
}
```

4. package.jsonにscriptに追加して実行

```
"scripts": {
  "test": "jest",
  ...
},
```

下記で実行
```
npm run test
or
yarn test
```

### testコードの書き方について

1. ファイルを__test__の配下に***.spec.jsもしくは***.test.jsという名前のファイルを追加する。
　→ポイントとしてはテストしたいファイルの内容と同じディレクトリ構造になっていると分かりやすいです。

**jestの設定ファイルのドキュメント**
https://jestjs.io/docs/ja/configuration.html


## 参考にした記事
**参考記事**
http://su-kun1899.hatenablog.com/entry/2018/01/25/110000
