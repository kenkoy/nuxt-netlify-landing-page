import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import index from '@/pages/game-page/_slug/index.vue'
import layout from '@/layouts/game-page/game-layout.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'

const GAME_DIR = '/assets/content/game-page/'

describe('Testing Game index.vue', () => {
  let wrapper, layoutWrapper, metaInfo, layoutInfo, tagIds, locale, mdData

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

    const markDownData = retriveFrontMattertoJSON(randomMarkdown)
    wrapper = mount(index, {
      localVue,
      data () {
        return {
          markDownData
        }
      }
    })
    layoutWrapper = shallowMount(layout)

    metaInfo = wrapper.vm.$metaInfo
    // layoutInfo = layoutWrapper.vm.$el
  })
  test('HTML', () => {
    const img = layoutWrapper.findAll('img');
    expect(img.length).toBe(1);
  }),
  test('HTML Meta Title should not be null or undefined', () => {
    const metaTitle = metaInfo.title
    expect(metaTitle).not.toBeNull()
    expect(metaTitle).not.toHaveLength(0)
  }),
  test('HTML Meta Keywords should not be null or undefined', () => {
    const metaKeywords = metaInfo.keyworkds
    expect(metaKeywords).not.toBeNull()
    expect(metaKeywords).not.toHaveLength(0)
  }),
  test('MD FILE: SEO Meta should be "meta"', () => {
    const errorSlugs = []
    mdData
      .map(md => retriveFrontMattertoJSON(md).attributes)
      .forEach((md) => {
        if (md.seo.meta === undefined) {
          errorSlugs.push(md.slug_name)
        }
      })
    expect(errorSlugs).toStrictEqual([])
  })
  test('MD FILE: SEO Meta Title should be "title"', () => {
    const errorSlugs = []
    mdData
      .map(md => retriveFrontMattertoJSON(md).attributes)
      .forEach((md) => {
        if (md.seo.title === undefined) {
          errorSlugs.push(md.slug_name)
        }
      })
    expect(errorSlugs).toStrictEqual([])
  }),
  test('MD FILE: SEO Meta Keywords should be "keywords"', () => {
    const errorSlugs = []
    mdData
      .map(md => retriveFrontMattertoJSON(md).attributes)
      .forEach((md) => {
        if (md.seo.meta.keywords === undefined) {
          errorSlugs.push(md.slug_name)
        }
      })
    expect(errorSlugs).toStrictEqual([])
  })
})
