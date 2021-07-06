import { createLocalVue, mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import layout from '@/layouts/game-page/game-layout.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'

const GAME_DIR = '/assets/content/game-page/'

describe('Testing Game index.vue', () => {
  let wrapper, localVue, dataMD

  beforeAll(async () => {
    const mdFiles = _
      .chain(await retrieveFiles(GAME_DIR, '.md'))
      .map(files => GAME_DIR + files)
      .value()

    localVue = createLocalVue()
    localVue.use(VueMeta, { keyName: 'head' })

    const randomMarkdown = _
      .chain(mdFiles)
      .sample()
      .value()

    dataMD = retriveFrontMattertoJSON(randomMarkdown)

    wrapper = mount(layout, {
      stubs: {
        Nuxt: true
      }
    })
  })
  test('layout-css CLASS should exist', () => {
    if (dataMD.length > 0) {
      const layoutCss = wrapper.findAll('.layout-css')
      expect(layoutCss.length).toBe(1)
    }
  })
  test('Iframe should exist', () => {
    if (dataMD.length > 0) {
      const iframe = wrapper.findAll('iframe')
      expect(iframe.length).toBe(1)
    }
  })
  test('Sticky footer ID name should be sticky-footer', () => {
    if (dataMD.length > 0) {
      const byId = wrapper.find('#sticky-footer')
      expect(byId.element.id).toBe('sticky-footer')
    }
  })
})
