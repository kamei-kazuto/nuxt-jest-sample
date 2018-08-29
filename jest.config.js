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
