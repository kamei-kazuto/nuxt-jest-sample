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

```javascript
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

```json
{
  "presets": ["env"]
}
```

4. package.jsonにscriptに追加して実行

```json
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


- nullを許容したいときは下記のようにする。

```
param: Joi.string().allow(null),
```

- リクエストしたデータを使いたいときは下記のようにする。

```javascript
const { json } = await frisby.get('https://*********.com')
```

## StoryBookの導入方法

1. libraryの追加
```
yarn add @storybook/vue
```

2. 設定ファイル（.storybook/config.js）を追加する。

```javascript
import { configure } from '@storybook/vue'

// ここで読み取るファイルを指定。
const req = require.context('../stories', true, /.stories.js$/) 

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)

```
3. componentの内容を設定ファイルで追加した位置に追加

```javascript
import { storiesOf } from '@storybook/vue'
import sample from '../components/sample.vue'

storiesOf('sample', module) // sampleの部分をスラッシュで区切ると階層構造のナビになる。
  .add('default',() => {
    return {
      components: { sample },
      template: `<sample />`
    }
  })

```

### StoryBookを利用したStoryShotsの導入方法
DOM構造の変更を検知できるためUIの崩れを防止できる。

1. ライブラリの追加
https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core

```
yarn add -D @storybook/addon-storyshots
```

2. 設定内容の追加
- jest.config.jsに下記を追加

```javascript
module.exports = {
  ...
  transformIgnorePatterns: [
    '/node_modules/(?!(@storybook/.*\\.vue$))',
  ],
  ...
}
```

- Sroryshots.test.jsファイルを追加
```javascript
import initStoryshots from '@storybook/addon-storyshots'

initStoryshots()
```

3. 下記のコマンドを実行すると__snapshots__にスナップショットのファイルが生成される。

```
yarn test

or 

jest
```

DOM構造が変更されているとテストに失敗する。
変更したい場合は`yarn test -u`を実行するとスナップショットが更新される。

## 参考にした記事

**参考記事**

https://qiita.com/H1Gdev/items/7aa5ca8a78839c615ac4  
http://su-kun1899.hatenablog.com/entry/2018/01/25/110000  
https://qiita.com/masaakikunsan/items/28c66a5f89b6c6e14e3d
