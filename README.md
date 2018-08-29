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

**jestの設定ファイルのドキュメント**
https://jestjs.io/docs/ja/configuration.html


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

### frisbyを利用したWEB APIのテストについて

使用するライブラリ
https://github.com/vlucas/frisby

```
yarn add -D frisby
```

#### レスポンスの値のチェックについて
→下記を利用して正規表現などでチェックできる。
https://github.com/hapijs/joi/blob/v13.6.0/API.md


nullを許容したいときは下記のようにする。
```
param: Joi.string().allow(null),
```


## 参考にした記事
**参考記事**
https://qiita.com/H1Gdev/items/7aa5ca8a78839c615ac4
http://su-kun1899.hatenablog.com/entry/2018/01/25/110000
