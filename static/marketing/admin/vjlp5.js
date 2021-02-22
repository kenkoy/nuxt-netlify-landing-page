/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'
import { STEPS } from './components/steps.js'
import { GAME_SLIDER } from './components/game-slider.js'
import { FOOTER } from './components/footer.js'

const html = htm.bind(h)
export const VJLP5_PREVIEW = createClass({

  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/vjlp5/previewPane.css'
    document.head.appendChild(link)
  },

  render () {
    const { widgetsFor, widgetFor } = this.props
    const banner = widgetsFor('promo_banner')
    const locale = widgetsFor('promo_locale')
    const version = widgetsFor('styles').getIn(['data'])
    const steps = widgetsFor('steps')
    const body = widgetFor('body')

    const country = locale.getIn(['data', 'promo_country_code'])
    const language = locale.getIn(['data', 'promo_language_code'])

    const imageBG = {
      '--bg-image': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_desktop'])}')`,
      '--bg-image-m': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_mobile'])}')`,
      '--bg-banner': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_banner'])}')`
    }

    const stepData = [{
      title: steps.getIn(['data', 'step_title_1']),
      description: steps.getIn(['data', 'step_description_1'])
    }, {
      title: steps.getIn(['data', 'step_title_2']),
      description: steps.getIn(['data', 'step_description_2'])
    }, {
      title: steps.getIn(['data', 'step_title_3']),
      description: steps.getIn(['data', 'step_description_3'])
    }]

    const gamesData = widgetsFor('game_images').getIn(['data'])
    // let games = []
    // if (typeof gamesData.toJS() !== 'undefined') {
    //   const links = Object.entries(gamesData.toJS())
    //     .filter(data => data[0].includes('url'))
    //     .map(data => data[1])
    //   const icons = Object.entries(gamesData.toJS())
    //     .filter(data => data[0].includes('icon'))
    //     .map(data => data[1])
    //   games = links.map((data, index) => ({
    //     link: data, icon: icons[index]
    //   }))
    // }

    return (html`
      <body
        class="vjlp5_wrapper"
        className="${version}"
      >
        <header id="header">
          <div class="container">
            <div class="logo">
              <!-- <img alt="alt logo" src="@/assets/images/vjlp5/vj-logo.png" data-not-lazy> -->
            </div>

            <div class="nav-links">
              <button class="warning">
                <a href="${banner.getIn(['data', 'promo_join_button_redirect_url'])}">
                  ${banner.getIn(['data', 'promo_login_button'])}
                </a>
              </button>
              <button class="error animated pulse infinite">
                <a href="${banner.getIn(['data', 'promo_login_button_redirect_url'])}">
                  <strong>${banner.getIn(['data', 'promo_join_button'])}</strong>
                </a>
              </button>
            </div>
          </div>
        </header>
        <section id="hero" style="${imageBG}">
          <div class="container">
            <div>
              ${banner.getIn(['data', 'promo_join_button'])}
            </div>
          </div>
        </section>

        ===== ${steps}

      </body>
    `)
  }
})
