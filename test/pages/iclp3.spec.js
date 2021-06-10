import { mount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import index from '@/pages/marketing/iclp3/_slug/index.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'

const ICLP3_DIR = '/assets/content/landing-page/marketing/iclp3/'

describe('Testing ICLP3 index.vue', () => {
  let wrapper, metaInfo, tagIds, locale

  beforeAll(async () => {
    //  ==== For Vue Components ====
    const localVue = createLocalVue()
    localVue.use(VueMeta, { keyName: 'head' })

    const mdComponents = _
      .chain(await retrieveFiles(ICLP3_DIR, '.md'))
      .map(files => ICLP3_DIR + files)
      .sample()
      .value()

    const dataMD = retriveFrontMattertoJSON(mdComponents)
    wrapper = mount(index, {
      localVue,
      data () {
        return {
          dataMD
        }
      }
    })
    metaInfo = wrapper.vm.$metaInfo
    tagIds = dataMD.attributes.field_ids
    locale = dataMD.attributes.promo_locale
  })
  test('Title should be インターカジノ', () => {
    const pageTitle = metaInfo.title
    expect(pageTitle).toBe('インターカジノ')
  })

  test('HTML language attribute should not be null or undefined', () => {
    const languageAttribute = metaInfo.htmlAttrs.lang
    expect(languageAttribute).not.toBeNull()
    expect(languageAttribute).not.toHaveLength(0)
  })

  test('Body ID attriute should be LANGUAGE CODE-COUNTRY_CODE', () => {
    const countryCode = locale.promo_country_code
    const languageCode = locale.promo_language_code
    expect(countryCode).not.toBeNull()
    expect(countryCode).not.toHaveLength(0)

    const idAttribute = metaInfo.bodyAttrs.id
    expect(idAttribute).toBe(`${languageCode}-${countryCode}`)
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
