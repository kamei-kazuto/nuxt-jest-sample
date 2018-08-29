import { mount } from 'vue-test-utils'
import sample from '../../components/sample.vue'

// 直接test()を書くこともできる
// describeでテストの大枠を設定
describe('サンプル', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(sample) // testしたいcomponentを呼び出し。
  })

  // data
  test('商品名', () => {
    expect(wrapper.vm.product).toEqual('みかん')
  })

  test('値段', () => {
    expect(wrapper.vm.price).toEqual(100)
  })

  // computed
  test('消費税計算', () => {
    expect(wrapper.vm.priceWithTax).toEqual(108)
  })

  // method
  const count = 3 // 引数を定義

  test('商品数計算', () => {
    expect(wrapper.vm.calcAmount(count)).toEqual(300)
  })

  test('複数商品の消費税計算', () => {
    expect(wrapper.vm.calcAmountWithTax(count)).toEqual(324)
  })

})
