
import { mount, createLocalVue } from '@vue/test-utils'
import { read } from 'gray-matter'
import VueMeta from 'vue-meta'

import VJLP5 from '@/layouts/vjlp5.vue'
import Footer from '@/components/Base/TheFooter.vue'

const slug = '306-bvj-lan-jp-pro-livecasino-v2-0520'

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const wrapper = mount(VJLP5, {
  stubs: ['nuxt'],
  localVue
})

describe('Testing VJLP5 Landing Page', () => {
  beforeEach(async () => {
    const fileLoc = `${process.cwd()}/assets/content/landing-page/marketing/vjlp5/${slug}.md`
    const { data, content } = read(fileLoc)
    await wrapper.setData({
      mdData: data,
      htmlBody: content
    })
  })

  test('VJLP5 is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('VJLP5 has Footer Component', () => {
    const footer = wrapper.findComponent(Footer)
    expect(footer.exists()).toBeTruthy()
  })

  test('Match slug name from file name', () => {
    const slugName = wrapper.vm.mdData.slug_name
    expect(slugName).toBe(slug)
  })

  test('Join and deposit button redirect URL should be https://verajohn.com/#join', () => {
    wrapper.findAll('button').wrappers.forEach((btn) => {
      const _btn = btn.find('a').html()
      expect(_btn.includes('href="https://verajohn.com/#join"')).toBeTruthy()
    })
  })
})
