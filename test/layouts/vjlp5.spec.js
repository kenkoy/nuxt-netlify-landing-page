
import { mount } from '@vue/test-utils'
import _ from 'lodash'
import VJLP5 from '@/layouts/vjlp5.vue'
import Footer from '@/components/Base/TheFooter.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '../utils/fileUtil'

const VJLP5_DIR = '/assets/content/landing-page/marketing/vjlp5/'

describe('Testing VJLP5 layout vjlp5.vue', () => {
  let wrapper
  beforeAll(async () => {
    const md = _
      .chain(await retrieveFiles(VJLP5_DIR, '.md'))
      .map(files => VJLP5_DIR + files)
      .sample()
      .value()

    const { html, attributes } = retriveFrontMattertoJSON(md)
    wrapper = mount(VJLP5, {
      stubs: ['nuxt']
    })

    await wrapper.setData({
      mdData: attributes,
      htmlBody: html
    })
  })

  test('VJLP5 is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('VJLP5 has Footer Component', () => {
    const footer = wrapper.findComponent(Footer)
    expect(footer.exists()).toBeTruthy()
  })

  test('Join and deposit button redirect URL should be https://verajohn.com/#join', () => {
    wrapper.findAll('button').wrappers.forEach((btn) => {
      const _btn = btn.find('a').html()
      expect(_btn.includes('href="https://verajohn.com/#join"')).toBeTruthy()
    })
  })
})
