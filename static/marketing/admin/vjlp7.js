/* eslint-disable no-undef */
import htm from './external-scripts/htm.module.js'

const html = htm.bind(h)
export const VJLP7_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '../../assets/sass/vjlp7/style.scss'
    document.head.appendChild(link)
  },

  render () {
    const { widgetFor, widgetsFor } = this.props
    const locale = widgetsFor('promo_locale')
    const banner = widgetsFor('promo_banner')
    const body = widgetFor('body')
    const cssBg = {
      '--bg-image': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_desktop'])}')`,
      '--bg-image-m': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_mobile'])}')`,
      '--bg-banner': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_banner']) || ''}')`
    }

    const buttonLocation = banner.getIn(['data', 'promo_join_button_location'])
    let joinBtnStyle = {}
    let bottomJoinBtnStyle = {}
    if (buttonLocation === 'hidden') {
      joinBtnStyle = { display: 'none' }
      bottomJoinBtnStyle = joinBtnStyle
    } else if (buttonLocation === 'lower-right') {
      joinBtnStyle = {
        position: 'absolute',
        right: '0px',
        bottom: '0px'
      }
    } else if (buttonLocation === 'upper-right') {
      joinBtnStyle = {}
    }

    const bannerTitle = banner.getIn(['data', 'promo_title_display'])
      ? banner.getIn(['data', 'promo_title'])
      : ''

    return (html`
    <body
      id="${locale.getIn(['data', 'promo_language_code'])}-${locale.getIn(['data', 'promo_country_code'])}"
      style='${cssBg}'
    >
      <div :class="{ vjlp7_wrapper: true }">
        <nuxt />
        <div
          v-if="Object.keys(mdData).length > 0"
          class="vjlp7-main"
          :class="mdData.styles"
        >
          <section id="hero" :style="cssBackground">
            <div class="container">
              <div id="hero-text-wrapper">
                <div>
                  <div id="login" class="animated">
                    <div class="fadeIn animated">
                      <a href="${banner.getIn(['data', 'promo_login_button_redirect_url'])}">
                        <i class="material-icons">exit_to_app</i>
                        <span>${banner.getIn(['data', 'promo_login_button'])}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </body>`
    )
  }
})
