/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const VJLP1_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/vjlp1/previewPane.css'
    document.head.appendChild(link)
  },

  formatTitle (title = ' ', higligtedPhrases = [' ']) {
    const bannerTitle = title.split(/\r?\n/)
      .filter(title => !!title)
      .map(title => title.slice(-1) === '\\'
        ? title.substring(0, title.length - 1)
        : title
      )

    let idx = 0
    higligtedPhrases.filter(phrase => !!phrase)
      .forEach((phrase) => {
        while (bannerTitle.length > idx) {
          if (bannerTitle[idx].includes(phrase)) {
            bannerTitle[idx] = bannerTitle[idx].replace(phrase, `<font color="#ffd966"><b>${phrase}</b></font>`)
            break
          } else {
            idx++
          }
        }
      })

    const _title = bannerTitle.reduce((oldVal, newVal) => {
      return oldVal + '<br />' + newVal
    })
    return { __html: _title }
  },

  formatTerms (terms = ' ', termsLinkText = [' ']) {
    let termsText = terms
    termsLinkText.filter(linkText => !!linkText)
      .forEach((linkText) => {
        if (terms.includes(linkText)) {
          termsText = termsText.replace(linkText, `<a href="#terms" class="link-terms-conditions ctac">${linkText}</a>`)
        }
      })
    return { __html: termsText }
  },

  render () {
    const locale = this.props.widgetsFor('promo_locale')
    const banner = this.props.widgetsFor('promo_banner')
    const steps = this.props.widgetsFor('promo_steps')
    const body = this.props.widgetFor('body')
    const cssBg = {
      '--bg-image': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_desktop'])}')`,
      '--bg-image-m': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_mobile'])}')`,
      '--bg-banner': `url('${banner.getIn(['data', 'promo_images', 'promo_game_logo']) || ''}')`
    }

    const titleText = this.formatTitle(
      banner.getIn(['data', 'promo_title']) || ' ',
      banner.getIn(['data', 'promo_title_highlighted'])
    )

    const termsText = this.formatTerms(
      banner.getIn(['data', 'promo_terms_text']) || ' ',
      banner.getIn(['data', 'promo_terms_link_text'])
    )

    return (
      html`
      <body
        id="${locale.getIn(['data', 'promo_language_code'])}-${locale.getIn(['data', 'promo_country_code'])}"
      >
        <header id="strip-container" class="container-flex h-100" style='${cssBg}'>
          <a id="login-btn" href="${banner.getIn(['data', 'promo_login_button_redirect_url'])}" class="login hvr-pulse">
            <div class="animated fadeIn">
              <i class="material-icons">exit_to_app</i>
              <div class="login-txt">
                ${banner.getIn(['data', 'promo_login_button'])}
              </div>
            </div>
          </a>
          <div class="container">
            <div class="row row-eq-height">
              <div id="strip" class="col-lg-5 strip">
                <div class="strip-container animated fadeIn prev-strip-container">
                  <div class="logo animated fadeIn"></div>
                  <h1 dangerouslySetInnerHTML='${titleText}'></h1>
                  <a
                    id="signup-btn" href="${banner.getIn(['data', 'promo_join_button_redirect_url'])}"
                    class="button button-lrg d-block"
                  >
                    ${banner.getIn(['data', 'promo_join_button'])}
                  </a>
                </div>
                <div class="small-terms prev-banner-terms" dangerouslySetInnerHTML='${termsText}'></div>
              </div>
              <div id="stripblank" class="col-lg-7"></div>
            </div>
          </div>
        </header>
        <section class="container-flex bg-alt steps animated fadeIn">
          <div class="container">
            <div class="row">
              <div class="col-4 animated fadeIn delay-0s">
                <div class="num">1</div>
                <div class="step">
                  <h2>${steps.getIn(['data', 'promo_step_1_title'])}</h2>
                  <h3>${steps.getIn(['data', 'promo_step_1_desc'])}</h3>
                </div>
              </div>
              <div class="col-4 animated fadeIn delay-1s">
                <div class="num">2</div>
                <div class="step">
                  <h2>${steps.getIn(['data', 'promo_step_2_title'])}</h2>
                  <h3>${steps.getIn(['data', 'promo_step_2_desc'])}</h3>
                </div>
              </div>
              <div class="col-4 animated fadeIn delay-2s">
                <div class="num">3</div>
                <div class="step">
                  <h2>${steps.getIn(['data', 'promo_step_3_title'])}</h2>
                  <h3>${steps.getIn(['data', 'promo_step_3_desc'])}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="terms-anchor" class="container animated fadeIn"></section>
        <div class="container-fluid pp">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="payment-providers"></div>
              </div>
            </div>
          </div>
        </div>
        <section id="terms" class="container animated fadeIn">
          <div class="row">
            <div class="col-12">${body}</div>
          </div>
          <ul>
            <li>通常の<a href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と<a
                href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。</li>
          </ul>
        </section>
        <footer id="footer" class="animated fadeIn">
          <div class="container-fluid pp">
            <div class="container">
              <div class="row">
                <div class="col-12"></div>
              </div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="icons text-center">
                  <div class="icon">
                    <a href="https://www.verajohn.com/about/responsible-gaming" target="blank">
                      <div class="age"></div>
                    </a>
                  </div>
                  <div class="icon">
                    <a href="https://www.gamstop.co.uk" target="blank">
                      <div class="gamstop"></div>
                    </a>
                  </div>
                  <div class="icon">
                    <a href="https://www.begambleaware.org" target="blank">
                      <div class="bga"></div>
                    </a>
                  </div>
                  <div class="icon">
                    <a href="https://www.gamblingtherapy.org/en" target="blank">
                      <div class="gt"></div>
                    </a>
                  </div>
                  <div class="icon">
                    <a href="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39408" target="blank">
                      <div class="ukgc"></div>
                    </a>
                  </div>
                  <div class="icon">
                    <a href="#" target="blank">
                      <div class="curacao"></div>
                    </a>
                  </div>
                  <div class="icon">
                    <a href="https://www.gamcare.org.uk" target="blank">
                      <div class="gamcare"></div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="footer-content col-12 text-center">
                  <p class="text-center">
                    <a href="https://verajohn.com/about/responsible-gaming" target="blank">
                      ギャンブルには中毒性があります。
                      自己責任を持ってプレイしてください。
                    </a>
                  </p>
                  <p class="prev-footer-text"></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
      `
    )
  }
})
