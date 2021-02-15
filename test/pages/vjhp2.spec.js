import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import index from '@/pages/marketing/vjhp/index.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'

const VJHP_DIR = '/assets/content/landing-page/marketing/vjhp/'

describe('Testing VJHP2 index.vue', () => {
  let wrapper, metaInfo, tagIds

  beforeAll(async () => {
    const localVue = createLocalVue()
    localVue.use(VueMeta, { keyName: 'head' })

    const md = _
      .chain(await retrieveFiles(VJHP_DIR, '.md'))
      .map(files => VJHP_DIR + files)
      .sample()
      .value()
    const post = retriveFrontMattertoJSON(md)
    wrapper = shallowMount(index, {
      localVue,
      data () {
        return {
          post
        }
      }
    })
    metaInfo = wrapper.vm.$metaInfo
    tagIds = post.attributes.field_ids
  })

  test('Title should be Vera&John - The fun online casino', () => {
    const pageTitle = metaInfo.title
    expect(pageTitle).toBe('Vera&John - The fun online casino')
  })

  test('HTML language attribute should not be null or undefined', () => {
    const languageAttribute = metaInfo.htmlAttrs.lang
    expect(languageAttribute).not.toBeNull()
    expect(languageAttribute).not.toHaveLength(0)
  })

  test('Body ID attriute should be LANGUAGE CODE-COUNTRY_CODE', () => {
    const langHtmlAttribute = metaInfo.htmlAttrs.lang
    expect(langHtmlAttribute).toBe('ja')

    const idBodyAttribute = metaInfo.bodyAttrs.id
    expect(idBodyAttribute).toBe('ja-jp')
  })

  test('Google Optimize ID and scripts should be present', () => {
    const googleOptimizeId = tagIds.go_container_id
    expect(googleOptimizeId).not.toBeNull()
    expect(googleOptimizeId).not.toHaveLength(0)

    const googleOptimizeScript = metaInfo.script.find(s => s.hid === 'goHead').innerHTML
    expect(googleOptimizeScript.includes(googleOptimizeId)).toBeTruthy()
  })

  test('Google Analytics ID and scripts should be present', () => {
    const googleAnalyticsId = tagIds.ga_tracking_id
    expect(googleAnalyticsId).not.toBeNull()
    expect(googleAnalyticsId).not.toHaveLength(0)

    const googleAnalyticsScript = metaInfo.script.find(s => s.hid === 'gaHead').innerHTML
    expect(googleAnalyticsScript.includes(googleAnalyticsId)).toBeTruthy()
  })

  test('Google Tag Mananger ID and scripts should be present', () => {
    const googleTagMangerId = tagIds.gtm_container_id
    expect(googleTagMangerId).not.toBeNull()
    expect(googleTagMangerId).not.toHaveLength(0)

    const googleTagManagerScript = metaInfo.script.find(s => s.hid === 'gtmHead').innerHTML
    expect(googleTagManagerScript.includes(googleTagMangerId)).toBeTruthy()

    const googleTagManagerNoScript = metaInfo.noscript.find(s => s.hid === 'gtmBody').innerHTML
    expect(googleTagManagerNoScript.includes(googleTagMangerId)).toBeTruthy()
  })
})
