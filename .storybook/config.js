import { configure } from '@storybook/vue'

const req = require.context('../stories', true, /.stories.js$/)

const loadStories = () => {
  // require("../stories/index")
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
