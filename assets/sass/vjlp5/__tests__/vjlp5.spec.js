import { mount } from '@vue/test-utils'
import index from '@/assets/sass/vjlp5/style'

describe('VJLP5', function() {
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
});
