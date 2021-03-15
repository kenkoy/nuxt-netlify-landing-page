// RUN
// npm run test -- --silent=falseclear
// to see console error

import { mount, createLocalVue, createWrapper } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import index from '@/pages/marketing/vjlp5/_slug/index.vue'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'

const VJLP5_DIR = '/assets/content/landing-page/marketing/vjlp5/'

describe('Testing VJLP5 index.vue', () => {
  let wrapper, metaInfo, tagIds, locale, datum

  beforeAll(async () => {
    //==== For MD Files ====
    const md = _
      .chain(await retrieveFiles(VJLP5_DIR, '.md'))
      .map(files => VJLP5_DIR + files)
      .value()
    let dataMDContent = []
    let jsonData = []

    md.forEach((item, i) => {
      jsonData.push(retriveFrontMattertoJSON(item))
      jsonData.forEach((attr, i) => {
        dataMDContent.push(attr.attributes)
      })
    })
    datum = dataMDContent


    //==== For Vue Components ====
    const localVue = createLocalVue()
    localVue.use(VueMeta, { keyName: 'head' })

    const mdComponents = _
      .chain(await retrieveFiles(VJLP5_DIR, '.md'))
      .map(files => VJLP5_DIR + files)
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


  //====  MD FILES TEST ====
  //HERO SECTION
  test('Banner title should be first_title', () => {
    const title = datum
    title.forEach((item, i) => {
      const banner_title = item.promo_banner.first_title
      if(banner_title !== `${item.promo_banner.first_title}`){
        console.log("ERROR FILE", item.slug_name)
      }
      expect(banner_title).toBe(`${item.promo_banner.first_title}`)
    })
  })
  test('Banner subtitle should be second_title', () => {
    const subtitle = datum
    subtitle.forEach((item, i) => {
      const banner_subtitle = item.promo_banner.second_title
      if(banner_subtitle !== `${item.promo_banner.second_title}`){
        console.log("ERROR FILE", item.slug_name)
      }
      expect(banner_subtitle).toBe(`${item.promo_banner.second_title}`)
    })
  })
  //STEPS / CAROUSEL
  test('Steps title shoud be step_title_1', () => {
    const steps = datum
    steps.forEach((item, i) => {
      const title_1 = item.steps.step_title_1
      if(title_1 !== `${item.steps.step_title_1}`){
        console.log("ERROR FILE", item.slug_name)
      }
      expect(title_1).toBe(`${item.steps.step_title_1}`)
    })
  })
  test('Steps title shoud be step_title_2', () => {
    const steps = datum
    steps.forEach((item, i) => {
      const title_2 = item.steps.step_title_2
      if(title_2 !== `${item.steps.step_title_2}`){
        console.log("ERROR FILE", item.slug_name)
      }
      expect(title_2).toBe(`${item.steps.step_title_2}`)
    })
  })
  test('Steps title shoud be step_title_3', () => {
    const steps = datum
    steps.forEach((item, i) => {
      const title_3 = item.steps.step_title_3
      if(title_3 !== `${item.steps.step_title_3}`){
        console.log("ERROR FILE", item.slug_name)
      }
      expect(title_3).toBe(`${item.steps.step_title_3}`)
    })
  })

  test('Steps description shoud be step_description_1', () => {
    const steps = datum
    steps.forEach((item, i) => {
      const desc_1 = item.steps.step_description_1
      if(desc_1 !== `${item.steps.step_description_1}`){
        console.log("ERROR FILE", item.slug_name)
      }
      expect(desc_1).toBe(`${item.steps.step_description_1}`)
    })
  })
  test('Steps description shoud be step_description_2', () => {
    const steps = datum
    steps.forEach((item, i) => {
      const desc_2 = item.steps.step_description_2
      if(desc_2 !== `${item.steps.step_description_2}`){
        console.log("ERROR FILE", item.slug_name)
      }
      expect(desc_2).toBe(`${item.steps.step_description_2}`)
    })
  })
  test('Steps description shoud be step_description_3', () => {
    const steps = datum
    steps.forEach((item, i) => {
      const desc_3 = item.steps.step_description_3
      if(desc_3 !== `${item.steps.step_description_3}`){
        console.log("ERROR FILE", item.slug_name)
      }
      expect(desc_3).toBe(`${item.steps.step_description_3}`)
    })
  })


  //==== COMPONENTS TEST ====
  test('Title should be Vera&John', () => {
    const pageTitle = metaInfo.title
    expect(pageTitle).toBe('Vera&John')
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
