/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'
import { FOOTER } from './components/footer.js'

const html = htm.bind(h)
export const VJLP8_PREVIEW = createClass({

  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/vjlp8/previewPane.css'
    document.head.appendChild(link)
  },

  setBannerDesc (subtitle = ' ', highligtedTexts = [' ']) {
    const bannerTitle = subtitle.split(/\r?\n/)
      .map(title => subtitle.slice(-1) === '\\'
        ? subtitle.substring(0, subtitle.length - 1)
        : title
      )

    let idx = 0
    highligtedTexts.filter(phrase => phrase)
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

    return {
      __html: bannerTitle.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    }
  },

  formatTerms (terms = ' ', termsLinkText = [' ']) {
    let termsText = terms
    termsLinkText.filter(linkText => !!linkText)
      .forEach((linkText) => {
        if (termsText.includes(linkText)) {
          termsText = termsText.replace(linkText, `<a rel="noopener" href="#terms">${linkText}</a>`)
        }
      })
    return { __html: termsText }
  },

  render () {
    const { widgetFor, widgetsFor } = this.props
    const locale = widgetsFor('promo_locale')
    const banner = widgetsFor('promo_banner')
    const body = widgetFor('body')
    const sections = widgetsFor('section')
    const version = widgetsFor('styles').getIn(['data'])

    const country = locale.getIn(['data', 'promo_country_code'])
    const language = locale.getIn(['data', 'promo_language_code'])

    const imageBG = {
      '--bg-image': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_desktop'])}')`,
      '--bg-image-m': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_mobile'])}')`
    }

    const bannerDescription = this.setBannerDesc(
      banner.getIn(['data', 'promo_small_subtitle']) || ' ',
      banner.getIn(['data', 'promo_small_subtitle_highlighted'])
    )

    const termsText = this.formatTerms(
      banner.getIn(['data', 'promo_terms']) || ' ',
      banner.getIn(['data', 'promo_link_terms'])
    )

    return (
      html`
      <body
        class="vjlp8-main"
        style='${imageBG}'
        className="${version}"
      >
        <section id="hero">
          <div class="container">
            <div>
              <div id="login">
                <div>
                  <a rel="noopener" href="${banner.getIn(['data', 'promo_login_button_redirect_url'])}">
                    <i class="material-icons">exit_to_app</i>
                    <span>${banner.getIn(['data', 'promo_login_button'])}</span>
                  </a>
                </div>
              </div>

              <img alt="alt img" class="logo" src="/marketing/img/vjlp8/logo.png"></img>
              <div class="banner">
                <img alt="alt img" class="bounce animated delay-1s" src="${banner.getIn(['data', 'promo_images', 'promo_game_logo']) || ''}"></img>
                <img alt="alt img" src="${banner.getIn(['data', 'promo_images', 'promo_game_image']) || ''}"></img>
                <h1>${banner.getIn(['data', 'promo_large_subtitle'])}</h1>
                <p dangerouslySetInnerHTML='${bannerDescription}'></p>
              </div>

              <div id="banner-terms">
                <button className="${version === 'version2' ? 'animated pulse infinite' : ''}">
                  <a href="${banner.getIn(['data', 'promo_join_button_redirect_url'])}">
                    ${banner.getIn(['data', 'promo_join_button'])}
                  </a>
                </button>
                <small dangerouslySetInnerHTML='${termsText}'></small>
              </div>
            </div>
          </div>
        </section>

        <section id="details">
          ${sections.filter(sect => !!sect).map(sect =>
            html`
            <div class="container">
              <div>
                <h2>${sect.getIn(['data', 'title']) || ''}</h2>
                <img alt="alt img" src="${(sect.getIn(['data', 'image']) || '')}"></img>
                <button>
                  <a rel="noopener" href="${sect.getIn(['data', 'join_button_redirect_url']) || ''}">
                    ${sect.getIn(['data', 'join_button']) || ''}
                  </a>
                </button>
              </div>
            </div>`
          )}
        </section>

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
                <li>通常の<a rel="noopener" href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と<a rel="noopener" href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="separator">
          <${FOOTER} landingPageType="verajohn" languageCode=${language} countryCode=${country} />
        </section>
      </body>`)
  }
})
