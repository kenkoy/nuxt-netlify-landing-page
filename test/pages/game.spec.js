import { mount, createLocalVue, createWrapper } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import index from '@/pages/game-page/_slug/index.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'
import { expect } from '@jest/globals'

const GAME_DIR = '/assets/content/game-page/'

describe('Testing Game index.vue', () => {
  let mdData, markDownData, wrapper, rootWrapper, error, localVue

  beforeAll(async () => {
    const mdFiles = _
      .chain(await retrieveFiles(GAME_DIR, '.md'))
      .map(files => GAME_DIR + files)
      .value()
    mdData = mdFiles


    localVue = createLocalVue()
    localVue.use(VueMeta, { keyName: 'head' })
    markDownData = {
     attributes: {
       banner: {
         image: '/test/image',
         url: '/test'
       },
       game: {
         game_list: {
           title: 'Test Game'
         }
       },
       seo: {
         title: 'Test SEO',
         meta: {
           description: 'Test Meta Desc'
         }
       },
       html: '<h1>Test</h1>'
     }
   }


   wrapper = mount(index, {
      localVue,
      data () {
        return {
          markDownData,
          brand: 'vj'
        }
      },
      mocks: {
        $toCamelCase: jest.fn((obj) => {
          return obj
        }),
        $seoBuilder: jest.fn(() => {
          const metaTags = {
            title: 'Title',
            meta: [{
              hid: 'description',
              content: 'Test description'
            }],
            link: [{
              hid: 'canonical',
              rel: 'canonical',
              href: 'https://verajohn.com'
            }]
          }
          return metaTags
        }),
        $seoContent: jest.fn(() => {
          return ''
        })
      }
    })

    rootWrapper = createWrapper(wrapper.vm.$root)
    error = jest.fn()

    afterEach(() => {
      jest.clearAllMocks()
      jest.resetAllMocks()
      jest.resetModules()
      if (wrapper) {
        wrapper.destroy()
      }
    })
  })
  test('MD FILE: SEO Title should be title', () => {
    const errorSlugs = []
    mdData
      .map(md => retriveFrontMattertoJSON(md).attributes)
      .forEach((md) => {
        if (md.seo.title === undefined) {
          errorSlugs.push(md.slug_name)
        }
      })
    expect(errorSlugs).toStrictEqual([])
  })
  test('MD FILE: SEO Title should NOT be null', () => {
    const errorSlugs = []
    mdData
      .map(md => retriveFrontMattertoJSON(md).attributes)
      .forEach((md) => {
        if (md.seo.title.length === 0) {
          errorSlugs.push(md.slug_name)
        }
      })
    expect(errorSlugs).toStrictEqual([])
  })
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
  }),
  test('MD FILE: SEO Meta Keywords should NOT be null', () => {
    const errorSlugs = []
    mdData
      .map(md => retriveFrontMattertoJSON(md).attributes)
      .forEach((md) => {
        if (md.seo.meta.keywords.length === 0) {
          errorSlugs.push(md.slug_name)
        }
      })
    expect(errorSlugs).toStrictEqual([])
  })
})
