import { storiesOf } from '@storybook/vue'
import sample from '../components/sample.vue'

storiesOf('sample', module) // sampleの部分をスラッシュで区切ると階層構造のナビになる。
  .add('default',() => {
    return {
      components: { sample },
      template: `<sample />`
    }
  })
