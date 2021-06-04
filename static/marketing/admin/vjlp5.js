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

  formatTitle (title, phrase) {
    if (phrase && title) {
      const position = title.indexOf(phrase)
      const text = `<span class="highlight">${phrase}</span>`
      const output = [title.slice(0, position), text, title.slice(position, 0)].join('')
      return { __html: output }
    }
    return { __html: title }
  },

  textLink (text = '', textLinks = '', link = '') {
    if (textLinks) {
      const position = text.indexOf(textLinks)
      const textsample = `<a href=${link}>${textLinks}</a>`
      const output = [text.slice(0, position), textsample, text.slice(position, 0)].join(' ')
      return { __html: output }
    }
    return { __html: text }
  },

  nextlineToBr (paragraphs = '') {
    const text = paragraphs.split(/\r?\n/).map((sentence) => {
      return paragraphs.slice(-1) === '\\'
        ? paragraphs.substring(0, paragraphs.length - 1)
        : sentence
    }).reduce((oldVal, newVal) => {
      return oldVal + '<br />' + newVal
    })
    return { __html: text }
  },

  render () {
    const { widgetsFor, widgetFor } = this.props
    const banner = widgetsFor('promo_banner')
    const locale = widgetsFor('promo_locale')
    const version = widgetsFor('variation').getIn(['data'])
    const bannerFontSize = widgetsFor('promo_banner').getIn(['data', 'promo_banner_font_size'])
    const bannerPosition = widgetsFor('promo_banner').getIn(['data', 'promo_banner_position'])

    const firstData = widgetsFor('first_section')
    const additionalLinks = widgetsFor('additional_links')
    const uspLeftData = widgetsFor('usp_left')
    const uspRightData = widgetsFor('usp_right')

    const bannerTitle = this.formatTitle(
      banner.getIn(['data', 'first_title']),
      banner.getIn(['data', 'phrase'])
    )

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
      <body class="vjlp5_wrapper core-wrapper">
        <div
          class="vjlp5-main"
        >
          <div className="${version}">
            <header id="header">
              <div class="container">
                <div class="logo">
                  <img alt="alt logo" src="/marketing/img/vjlp5/vj-logo.png"></img>
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
                <div class="banner-wrapper">
                  <div className="${'banner' + ' ' + bannerPosition}">
                    <div>
                      ${widgetsFor('promo_banner').getIn(['data', 'first_title']) !== ''
                      ? html`<h1 className="${bannerFontSize}" dangerouslySetInnerHTML='${bannerTitle}'></h1>`
                      : ''}

                      ${widgetsFor('promo_banner').getIn(['data', 'second_title']) !== ''
                      ? html`<h1 className="${bannerFontSize}">${banner.getIn(['data', 'second_title'])}</h1>`
                      : ''}
                    </div>
                  </div>

                  ${!widgetsFor('promo_banner').getIn(['data', 'promo_join_button_option'])
                    ? ''
                    : html`
                      <div id="banner-button">
                        <button class="error">
                          <a href="${banner.getIn(['data', 'promo_login_button_redirect_url'])}"><strong>${banner.getIn(['data', 'promo_join_button'])} </strong></a>
                        </button>
                      </div>`}
                </div>
              </div>
            </section>

            ${widgetsFor('steps_gameslider').getIn(['data']) === 'steps'
              ? html`<${STEPS} steps="${stepData}" />`
              : html`<${GAME_SLIDER} games="${games}" />`
            }
            <section id="section1">
              <div class="container">
                <div>
                  ${firstData.filter(sect => !!sect).map(sect =>
                    html`
                    <div>
                      <h2>${sect.getIn(['data', 'first_section_title'])}</h2>
                      <p dangerouslySetInnerHTML='${this.nextlineToBr(sect.getIn(['data', 'first_section_description']))}'/>
                    </div>
                    `
                  )}
                  ${additionalLinks.filter(link => !!link)
                    .filter(link => typeof link.getIn(['data']) !== 'undefined')
                    .map(link =>
                      html`
                      <p dangerouslySetInnerHTML='${this.textLink(link.getIn(['data', 'text']), link.getIn(['data', 'text_link']), link.getIn(['data', 'link']))}'/>
                      `
                  )}
                  <div class="separator" />
                </div>
              </div>
            </section>

            <section id="section2">
              <div class="container column-2">
                <div>
                  ${uspLeftData.filter(sect => !!sect).map(sect =>
                    html`
                    <div>
                      <h2>${sect.getIn(['data', 'usp_title'])}</h2>
                      <p dangerouslySetInnerHTML='${this.nextlineToBr(sect.getIn(['data', 'usp_content']))}'/>
                    </div>
                    `
                  )}
                </div>

                <div>
                  ${uspRightData.filter(sect => !!sect).map(sect =>
                    html`
                    <div>
                      <h2>${sect.getIn(['data', 'usp_title'])}</h2>
                      <p dangerouslySetInnerHTML='${this.nextlineToBr(sect.getIn(['data', 'usp_content']))}'/>
                    </div>
                    `
                  )}
                </div>
              </div>
            </section>

            <section id="payment">
              <div class="container">
                <div>
                  <img class="desktop" src="/marketing/img/vj-payment/payment_large_${country}.svg" alt="payment verajohn desktop"></img>
                  <img class="mobile" src="/marketing/img/vj-payment/payment_${country}.svg" alt="payment verajohn mobile"></img>
                  <div class="separator" />
                </div>
              </div>
            </section>

            <div class="container">
              <div id="terms">
                <div>
                  ${body}
                </div>
                <p>通常の<a href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と<a href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。</p>
                <div class="separator" />
              </div>
            </div>

            <section class="separator">
              <${FOOTER} landingPageType="verajohn" languageCode=${language} countryCode=${country} />
            </section>
          </div>
        </div>

      </body>
    `)
  }
})
