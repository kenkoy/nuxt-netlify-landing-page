import { mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import _ from 'lodash'
import { retrieveFiles, retriveFrontMattertoJSON } from '@/test/utils/fileUtil.js'

const GAME_DIR = '/assets/content/game-page/'

describe('Testing Game index.vue', () => {
  let mdData

  beforeAll(async () => {
    const mdFiles = _
      .chain(await retrieveFiles(GAME_DIR, '.md'))
      .map(files => GAME_DIR + files)
      .value()
    mdData = mdFiles
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
  }),
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
