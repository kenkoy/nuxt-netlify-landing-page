import { shallowMount, createLocalVue, createWrapper, mount, someFunctionReturningHTMLString } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import layout from '@/layouts/game-page/game-layout.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'
import {jest} from '@jest/globals'

const GAME_DIR = '/assets/content/game-page/'

describe('Testing Game index.vue', () => {
  let mdData, markDownData, wrapper, rootWrapper, error, localVue, dataMD

  beforeAll(async () => {
    const mdFiles = _
      .chain(await retrieveFiles(GAME_DIR, '.md'))
      .map(files => GAME_DIR + files)
      .value()
    mdData = mdFiles

    const localVue = createLocalVue()
    localVue.use(VueMeta, { keyName: 'head' })

    const randomMarkdown = _
      .chain(mdFiles)
      .sample()
      .value()

    dataMD = retriveFrontMattertoJSON(randomMarkdown)
  })
  test('layout-css CLASS should exist', () => {
    const wrapper = mount(layout)
    const layoutWrapperClass = wrapper.vm.$el._prevClass
    expect(layoutWrapperClass).toContain('layout-css')
  }),
  test('Iframe should exist', () => {
    const wrapper = mount(layout)
    if (dataMD.length > 0){
      const iframe = wrapper.findAll('iframe')
      expect(iframe.length).toBe(1)
    }
  }),
  test('Sticky footer ID name should be sticky-footer', () => {
    const wrapper = mount(layout)
    if (dataMD.length > 0){
      const byId = wrapper.find('#sticky-footer')
      expect(byId.element.id).toBe('sticky-footer')
      expect(sampleData.find('sticky-footer')).toBe(true)
    }
  })
})
