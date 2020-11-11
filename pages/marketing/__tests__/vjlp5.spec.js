import { mount } from '@vue/test-utils'

import index from '@/pages/marketing/vjlp5/_slug/index'

describe('vjlp5 page', () => {
  let wrapper 
  beforeEach(async () => {
    wrapper = mount(index)
    const data = await wrapper.vm.$options.asyncData({
      params: { slug: '105-vj-lan-jp-pro-mobile-homepage-a-1219' }
    })
    await wrapper.setData({ dataMD: data });
  })
  
  test('mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('emitMDcontent event emits properly', async () => {
    wrapper.vm.$emit('emitMDcontent', { foo: 'bar' })
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().emitMDcontent[1]).toEqual([{ foo: 'bar' }])
  })

  test('dataMD async data should not be null', () => {
    expect(wrapper.vm.dataMD).not.toBeNull()
  })
})