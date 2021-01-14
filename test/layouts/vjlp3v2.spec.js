
import { mount } from '@vue/test-utils'
import _ from 'lodash'
import VJLP3v2 from '@/layouts/vjlp3v2'
import Footer from '@/components/Base/TheFooter.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'

const VJLP3_DIR = '/assets/content/landing-page/marketing/vjlp3/'

describe('Testing VJLP3v2 layout vjlp3v2.vue', () => {
  let wrapper
  beforeAll(async () => {
    const md = _
      .chain(await retrieveFiles(VJLP3_DIR, '.md'))
      .map(files => VJLP3_DIR + files)
      .sample()
      .value()

    const { html, attributes } = retriveFrontMattertoJSON(md)
    wrapper = mount(VJLP3v2, {
      stubs: ['nuxt']
    })

    await wrapper.setData({
      mdData: attributes,
      htmlBody: html
    })
  })

  test('Renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test('VJLP3v2 is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('VJLP3v2 has Footer Component', () => {
    const footer = wrapper.findComponent(Footer)
    // eslint-disable-next-line no-console
    console.log(footer.exists())
    expect(footer.exists()).toBe(true)
  })

  test('Join and deposit button redirect URL should be https://verajohn.com/#join', () => {
    wrapper.findAll('button').wrappers.forEach((btn) => {
      const _btn = btn.find('a').html()
      expect(_btn.includes('href="https://verajohn.com/#join"')).toBeTruthy()
    })
  })
})
