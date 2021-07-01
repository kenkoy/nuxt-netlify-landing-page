import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import layout from '@/layouts/game-page/game-layout.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'

describe('Testing Game index.vue', () => {
  let wrapper

  beforeAll(async () => {
    wrapper = shallowMount(layout)
  })
  test('Layout CLASS should exist', () => {
    expect(wrapper.classes()).toContain('layout-css')
  }),
  test('Iframe should exist', () => {
    const iframe = wrapper.findAll('iframe')
    expect(iframe.length).toBe(1)
  }),
  test('Sticky footer ID name should be sticky-footer', () => {
    const byId = wrapper.find('#sticky-footer')
    expect(byId.element.id).toBe('sticky-footer')
  }),
  test('Image alt tags should exist', () => {
    const imgArray = wrapper.findAll('img')
    if(imgArray.length > 0){
      expect(imgArray.contains('[alt]')).toBe(true)
    }
  })
})
