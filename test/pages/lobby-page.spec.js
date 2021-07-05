import { mount, createLocalVue, createWrapper } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import lobbyPage from '@/pages/lobby-page/_brand/_game/index.vue'
import { expect } from '@jest/globals'

describe('Testing lobby page index.vue', () => {
  let wrapper, markDownData, rootWrapper, error, localVue

  beforeEach(() => {
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

    wrapper = mount(lobbyPage, {
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
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
    jest.resetModules()
    if (wrapper) {
      wrapper.destroy()
    }
  })

  test('Test async data (success)', async () => {
    const app = wrapper.vm.$root
    const mockData = markDownData

    jest.mock('~/assets/content/lobby-page/verajohn/slots.md', () => {
      return mockData
    })

    const mockAsyncData = await wrapper.vm.$options.asyncData({
      params: {
        brand: 'verajohn',
        game: 'slots'
      },
      error,
      app
    })
    expect(mockAsyncData.markDownData).toMatchObject(mockData)
  })

  test('Test async data (failure)', async () => {
    const app = wrapper.vm.$root

    jest.mock('~/assets/content/lobby-page/verajohn/slots.md', () => {
      throw new Error('Error')
    })

    await wrapper.vm.$options.asyncData({
      params: {
        brand: 'verajohn',
        game: 'slots'
      },
      error,
      app
    })
    expect(error).toBeCalled()
  })

  test('Test emitData method', () => {
    expect(rootWrapper.emitted('lobby-page-data')).toBeTruthy()
  })

  test('Test can return empty head title', () => {
    wrapper = mount(lobbyPage, {
      localVue,
      data () {
        return {
          markDownData,
          brand: 'vj'
        }
      },
      mocks: {
        $seoBuilder: jest.fn(() => {
          const metaTags = {
            title: ''
          }
          return metaTags
        }),
        $seoContent: jest.fn(() => {
          return ''
        })
      }
    })
    expect(wrapper.vm.$metaInfo.title).toBe('')
  })
})
