import { mount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import index from '@/pages/game-page/_slug/index.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'

const GAME_DIR = '/assets/content/game-page/'

describe('Testing Game index.vue', () => {
  let wrapper, metaInfo, tagIds, locale, mdData

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
    metaInfo = wrapper.vm.$metaInfo
    tagIds = markDownData.attributes.field_ids
    locale = markDownData.attributes.promo_locale
  })
  test('HTML language attribute should not be null or undefined', () => {
    const languageAttribute = metaInfo.htmlAttrs.lang
    expect(languageAttribute).not.toBeNull()
    expect(languageAttribute).not.toHaveLength(0)
  })
})
