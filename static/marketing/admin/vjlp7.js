/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'
import { STEPS } from './components/steps.js'
import { GAME_SLIDER } from './components/game-slider.js'
import { FOOTER } from './components/footer.js'

const html = htm.bind(h)
export const VJLP7_PREVIEW = createClass({

  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/vjlp7/previewPane.css'
    document.head.appendChild(link)
  },

  formatTitle (title = ' ', higligtedPhrases = [' ']) {
    const bannerTitle = title.split(/\r?\n/)
      .map(title => title.slice(-1) === '\\'
        ? title.substring(0, title.length - 1)
        : title
      )

    let idx = 0
    higligtedPhrases.filter(phrase => !!phrase)
      .forEach((phrase) => {
        while (bannerTitle.length > idx) {
          if (bannerTitle[idx].includes(phrase)) {
            bannerTitle[idx] = bannerTitle[idx].replace(phrase, `<span class="highlight"><b>${phrase}</b></span>`)
            break
          } else {
            idx++
          }
        }
      })

    return bannerTitle.reduce((oldVal, newVal) => {
      return oldVal + '<br />' + newVal
    })
  },

  formatSubtitle (subtitle = ' ', higligtedPhrases = [' ']) {
    const bannerSubTitle = subtitle.split(/\r?\n/)
      .map(title => subtitle.slice(-1) === '\\'
        ? subtitle.substring(0, subtitle.length - 1)
        : title
      )

    let idx = 0

    if (higligtedPhrases) {
      higligtedPhrases.filter(phrase => phrase)
        .forEach((phrase) => {
          while (bannerSubTitle.length > idx) {
            if (bannerSubTitle[idx].includes(phrase)) {
              bannerSubTitle[idx] = bannerSubTitle[idx].replace(phrase, `<span class="color-alt-two">${phrase}</span>`)
              break
            } else {
              idx++
            }
          }
        })
    }
    return bannerSubTitle.reduce((oldVal, newVal) => {
      return oldVal + '<br />' + newVal
    })
  },

  formatTerms (terms = ' ', termsLinkText = [' ']) {
    let termsText = terms
    termsLinkText.filter(linkText => !!linkText)
      .forEach((linkText) => {
        if (termsText.includes(linkText)) {
          termsText = termsText.replace(linkText, `<a href="#terms" class="link-terms-conditions ctac">${linkText}</a>`)
        }
      })
    return { __html: termsText }
  },

  render () {
    const { widgetsFor, widgetFor } = this.props
    const banner = widgetsFor('promo_banner')
    const locale = widgetsFor('promo_locale')
    const variation = widgetsFor('variation').getIn(['data'])
    const steps = widgetsFor('steps')
    const body = widgetFor('body')

    const country = locale.getIn(['data', 'promo_country_code'])
    const language = locale.getIn(['data', 'promo_language_code'])

    const imageBG = {
      '--bg-image': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_desktop'])}')`,
      '--bg-image-m': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_mobile'])}')`,
      '--bg-banner': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_banner'])}')`,
      '--desktop-width-banner': banner.getIn(['data', 'desktop_full']) ? 'cover' : 'contain',
      '--mobile-width-banner': banner.getIn(['data', 'mobile_full']) ? 'cover' : 'contain'
    }

    const termsText = this.formatTerms(
      banner.getIn(['data', 'promo_terms_text']) || ' ',
      banner.getIn(['data', 'promo_terms_link_text'])
    )

    const title = this.formatTitle(
      banner.getIn(['data', 'promo_title']) || ' ',
      banner.getIn(['data', 'promo_title_highlighted'])
    )

    const subTitle = this.formatSubtitle(
      banner.getIn(['data', 'promo_subtitle']) || ' ',
      banner.getIn(['data', 'promo_subtitle_highlighted'])
    )

    const bannerTexts = banner.getIn(['data', 'promo_render_title_first'])
      ? { __html: `<h1>${title}</h1><h2>${subTitle}</h2>` }
      : { __html: `<h2>${subTitle}</h2><h1>${title}</h1>` }

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
    let games = []
    if (typeof gamesData.toJS() !== 'undefined') {
      const links = Object.entries(gamesData.toJS())
        .filter(data => data[0].includes('url'))
        .map(data => data[1])
      const icons = Object.entries(gamesData.toJS())
        .filter(data => data[0].includes('icon'))
        .map(data => data[1])
      games = links.map((data, index) => ({
        link: data, icon: icons[index]
      }))
    }

    return (html`
      <body
        class="vjlp7_wrapper core-wrapper"
      >
        <div class="vjlp7-main">
          <div className="${variation}" style="${imageBG}">
            <section id="hero">
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
                    <img class="logo" src="/marketing/img/vjlp7/logo.png" alt="verajohn logo"></img>
                    <div dangerouslySetInnerHTML='${bannerTexts}'></div>
                    <button class="animated infinite pulse">
                      <a href="${banner.getIn(['data', 'promo_join_button_redirect_url'])}">
                        ${banner.getIn(['data', 'promo_join_button'])}
                      </a>
                    </button>
                    <div>
                      <small dangerouslySetInnerHTML='${termsText}'></small>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            ${widgetsFor('steps_gameslider').getIn(['data']) === 'steps'
              ? html`<${STEPS} steps="${stepData}" />`
              : html`<${GAME_SLIDER} games="${games}" />`}

            <section id="payment" class="separator">
              <div class="container">
                <img class="desktop" src="/marketing/img/vj-payment/payment_large_${country}.svg" alt="payment verajohn desktop"></img>
                <img class="mobile" src="/marketing/img/vj-payment/payment_${country}.svg" alt="payment verajohn mobile"></img>
              </div>
            </section>

            <section id="terms" class="separator">
              <div class="container">
                <div>
                  <div>${body}</div>
                  <ul>
                    <li>
                      通常の<a rel="noopener" href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と<a rel="noopener" href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <section class="separator">
            <${FOOTER} landingPageType="verajohn" languageCode=${language} countryCode=${country} />
          </section>
        </div>
      </body>
    `)
  }
})
