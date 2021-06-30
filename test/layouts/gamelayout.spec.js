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
  test('Images should have an alt tags', () => {
    const img = wrapper.find('img')
    if (img.exists()) {
      expect(img.attributes('alt')).not.toBeNull()
      expect(img.attributes('alt')).not.toHaveLength(0)
    }
  })
})
