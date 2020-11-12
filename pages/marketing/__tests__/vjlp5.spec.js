import { shallowMount } from '@vue/test-utils'

import index from '@/pages/marketing/vjlp5/_slug/index.vue'

describe('vjlp5 page', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(index)
    const data = wrapper.vm.$options.asyncData({
      params: { slug: '105-vj-lan-jp-pro-mobile-homepage-a-1219' }
    })
    wrapper.setData({ markDownData: data })
  })

  test('mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test.skip('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test.skip('markdownData async data should not be null', () => {
    expect(wrapper.vm.markdownData).not.toBeNull()
  })
})
