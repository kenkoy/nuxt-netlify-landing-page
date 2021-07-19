/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'
import { STEPS } from './components/steps.js'
import { FOOTER } from './components/footer.js'

const html = htm.bind(h)
export const YGLP1_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/yglp1/previewPane.css'
    document.head.appendChild(link)
  },
  render () {
    const { widgetsFor, widgetFor } = this.props
    const banner = widgetsFor('promo_banner')
    const locale = widgetsFor('promo_locale')
    const info = widgetsFor('info_image')
    const steps = widgetsFor('steps')
    const body = widgetFor('body') || ''

    const country = locale.getIn(['data', 'promo_country_code']) || ''
    const language = locale.getIn(['data', 'promo_language_code']) || ''

    const promoLoginButtonRedirectUrl = banner.getIn(['data', 'promo_login_button_redirect_url']) || ''
    const promoLoginButtonText = banner.getIn(['data', 'promo_login_button_text']) || ''

    const promoRegisterButtonRedirectUrl = banner.getIn(['data', 'promo_register_button_redirect_url']) || ''
    const promoRegisterButtonText = banner.getIn(['data', 'promo_register_button_text']) || ''

    const promoSubTitle = banner.getIn(['data', 'promo_sub_title']) || ''
    const promoTitle1 = banner.getIn(['data', 'promo_title_1']) || ''
    const promoTitle2 = banner.getIn(['data', 'promo_title_2']) || ''

    const promoBgMobile = banner.getIn(['data', 'promo_bg_mobile'])

    const promoBgDesktop = {
      '--bg-image-desktop': `url('${banner.getIn(['data', 'promo_bg_desktop'])}')`
    }

    const promoText = banner.getIn(['data', 'promo_text']) || ''
    const promoLinkRedirect = banner.getIn(['data', 'promo_link_redirect']) || ''
    const promoLinkText = banner.getIn(['data', 'promo_link_text']) || ''

    const infoImage1 = info.getIn(['data', 'info_image_1']) || ''
    const infoImage2 = info.getIn(['data', 'info_image_2']) || ''

    const stepData = [{
      title: steps.getIn(['data', 'step_title_1']) || '',
      description: steps.getIn(['data', 'step_description_1']) || ''
    }, {
      title: steps.getIn(['data', 'step_title_2']) || '',
      description: steps.getIn(['data', 'step_description_2']) || ''
    }, {
      title: steps.getIn(['data', 'step_title_3']) || '',
      description: steps.getIn(['data', 'step_description_3']) || ''
    }]

    return (html`
      <body
        class="yglp1_wrapper layout-css"
      >
        <div class="yglp1-main">
          <section id="hero" style=${promoBgDesktop}>
            <div class="container">
              <div class="row column-2">
                <div id="hero-text-wrapper">
                  <div>
                    <div id="login" class="animated">
                      <div class="fadeIn animated">
                        <a href="${promoLoginButtonRedirectUrl}">
                          <i class="material-icons">exit_to_app</i>
                          <span>${promoLoginButtonText}</span>
                        </a>
                      </div>
                    </div>
                    <img class="logo" src="/marketing/img/yglp1/logo-jp.png" alt="yuugado logo" />
                    <div>
                      <p>${promoSubTitle}</p>
                      <h1>${promoTitle1}</h1>
                      <h2>${promoTitle2}</h2>
                    </div>
                    <button>
                      <a href="${promoRegisterButtonRedirectUrl}">${promoRegisterButtonText}</a>
                    </button>
                    <img class="game-logo" src="${promoBgMobile}" alt="yuugado game" />
                    <small><a href="#">利用規約</a>に同意します。</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <${STEPS} steps="${stepData}" />

          <section id="image-body">
            <div>
              <img src="${infoImage1}" />
              <img src="${infoImage2}" />
              <button>
                <a href="${promoRegisterButtonRedirectUrl}">${promoRegisterButtonText}</a>
              </button>
              <h3 class="text-center">
                ${promoText}<a href="${promoLinkRedirect}">${promoLinkText}</a>
              </h3>
            </div>
          </section>
          <section id="payment" class="separator">
            <div class="container">
              <div class="row">
                <svg class="desktop mobile" />
              </div>
            </div>
          </section>
          <section id="terms" class="separator">
            <div class="container">
              <div class="row">
                <div>
                  <div>
                    ${body}
                  </div>
                  <ul>
                    <li>
                      通常の
                      <a href="https://yuugado.com/about/terms-and-conditions">利用規約</a>と
                      <a href="https://yuugado.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="separator">
            <${FOOTER} landingPageType="yuugado" languageCode=${language} countryCode=${country} />
          </section>
        </div>
      </body>
    `)
  }
})
