/* eslint-disable no-undef */
import htm from './external-scripts/htm.module.js'

const html = htm.bind(h)
export const VJLP7_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '~/assets/sass/vjlp7/style.scss'
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
                      <a :href="mdData.promo_banner.promo_login_button_redirect_url">
                        <i class="material-icons">exit_to_app</i>
                        <span>{{ mdData.promo_banner.promo_login_button }}</span>
                      </a>
                    </div>
                  </div>
                  <img class="logo" src="@/assets/images/vjlp1v2/logo.png" alt="verajohn logo">
                  <div v-if="mdData.promo_banner.promo_render_title_first">
                    <h1 v-if="mdData.promo_banner.promo_title" v-html="bannerTitle" />
                    <h2 v-if="mdData.promo_banner.promo_subtitle" v-html="bannerSubtitle" />
                  </div>
                  <div v-else>
                    <h2 v-if="mdData.promo_banner.promo_subtitle" v-html="bannerSubtitle" />
                    <h1 v-if="mdData.promo_banner.promo_title" v-html="bannerTitle" />
                  </div>

                  <button class="animated infinite pulse">
                    <a :href="mdData.promo_banner.promo_join_button_redirect_url">{{ mdData.promo_banner.promo_join_button }}</a>
                  </button>
                  <div>
                    <small v-html="bannerTerms" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="steps">
            <div class="container">
              <div class="animated fadeIn delay-halfs">
                <span class="num">1</span>
                <div>
                  <h3>{{ mdData.promo_steps.promo_step_1_title }}</h3>
                  <p>{{ mdData.promo_steps.promo_step_1_desc }}</p>
                </div>
              </div>

              <div class="animated fadeIn delay-1s">
                <span class="num">2</span>
                <div>
                  <h3>{{ mdData.promo_steps.promo_step_2_title }}</h3>
                  <p>{{ mdData.promo_steps.promo_step_2_desc }}</p>
                </div>
              </div>

              <div class="animated fadeIn delay-1-and-halfs">
                <span class="num">3</span>
                <div>
                  <h3>{{ mdData.promo_steps.promo_step_3_title }}</h3>
                  <p>{{ mdData.promo_steps.promo_step_3_desc }}</p>
                </div>
              </div>
            </div>
          </section>

          <section id="payment" class="separator">
            <div class="container">
              <img class="desktop" src="@/assets/images/vjlp1v2/payment_large_jp.svg" alt="payment verajohn desktop">
              <img class="mobile" src="@/assets/images/vjlp1v2/payment_jp.svg" alt="payment verajohn mobile">
            </div>
          </section>

          <section id="terms" class="separator">
            <div class="container">
              <div>
                <div v-html="htmlBody" />
                <ul>
                  <li>
                    通常の
                    <a href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と
                    <a href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Footer
            :promo-language-code="mdData.promo_locale.promo_language_code"
            :promo-country-code="mdData.promo_locale.promo_country_code"
            :landing-page-type="'verajohn'"
          />
        </div>
      </div>
    </body>`
    )
  }
})
