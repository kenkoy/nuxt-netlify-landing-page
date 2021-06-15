/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const ICLP1_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/iclp1/previewPane.css'
    document.head.appendChild(link)
  },
  render () {
    const { widgetFor, widgetsFor } = this.props
    const locale = widgetsFor('promo_locale')
    const banner = widgetsFor('promo_banner')
    const steps = widgetsFor('promo_steps')
    const body = widgetFor('body')
    const cssBg = {
      '--bg-image': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_desktop'])}')`,
      '--bg-image-m': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_mobile'])}')`,
      '--bg-banner': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_banner'])}')`,
      '--desktop-width-banner': banner.getIn(['data', 'desktop_full']) ? 'cover' : 'contain',
      '--mobile-width-banner': banner.getIn(['data', 'mobile_full']) ? 'cover' : 'contain'
    }

    const signStyle = banner.getIn(['data', 'promo_title_animate'])
      ? {
          color: '#ffe6ff',
          textShadow: '0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483',
          animation: 'shine 2s forwards, flicker 3s infinite'
        }
      : {}

    return (html`
    <body
      id="${locale.getIn(['data', 'promo_language_code'])}-${locale.getIn(['data', 'promo_country_code'])}"
    >
      <header id="strip-container" class="container-flex h-100" style='${cssBg}'>
        <a id="login-btn" href="${banner.getIn(['data', 'promo_login_button_redirect_url'])}" class="login hvr-pulse">
          <div class="animated fadeIn">
            <i class="material-icons">exit_to_app</i>
            <div class="login-txt">
              ${banner.getIn(['data', 'promo_login_button_text'])}
            </div>
          </div>
        </a>

        <div class="container">
          <div class="row row-eq-height">
            <div id="strip" class="col-12 strip">
              <div class="strip-container animated fadeIn prev-strip-container">
                <div class="logo animated fadeIn"></div>
                <div>
                  <h2>${banner.getIn(['data', 'promo_subtitle_1'])}</h2>
                  <div><br/></div>
                  <div style=${signStyle}>
                    <h1 class="color-alt-two prev-main-heading">
                      <font color="#ffffff">${banner.getIn(['data', 'promo_main_heading'])}</font>
                    </h1>
                    <h2>${banner.getIn(['data', 'promo_subtitle_2'])}</h2>
                  </div>
                </div>
                <a id="signup-btn" href="${banner.getIn(['data', 'promo_signup_button_redirect_url'])}" class="button button-lrg prev-signup-btn">
                  ${banner.getIn(['data', 'promo_signup_button'])}
                </a>
              </div>
              <div class="small-terms"><a href="${banner.getIn(['data', 'promo_smallterm_redirect_url'])}" class="link-terms-conditions ctac">
                ${banner.getIn(['data', 'promo_smallterm_text_link'])}</a>${banner.getIn(['data', 'promo_smallterm_text'])}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="gb">
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
      </div>


      <section id="terms-anchor" class="container animated fadeIn"></section>
      <div class="container-fluid pp prev-border">
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
          <li>通常の<a href="https://intercasino.com/about/terms-and-conditions">利用規約</a>と<a
              href="https://intercasino.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。</li>
        </ul>
      </section>
      <footer id="footer" class="animated fadeIn">
        <div class="container-fluid pp prev-border">
          <div class="row">
            <div class="col-12"> </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="icons text-center">
              <div class="icon"> <a href="https://www.intercasino.com/about/responsible-gaming" target="blank">
                  <div class="age"></div>
                </a> </div>
              <div class="icon"> <a href="https://www.gamstop.co.uk" target="blank">
                  <div class="gamstop"></div>
                </a> </div>
              <div class="icon"> <a href="https://www.begambleaware.org" target="blank">
                  <div class="bga"></div>
                </a> </div>
              <div class="icon"> <a href="https://www.gamblingtherapy.org/en" target="blank">
                  <div class="gt"></div>
                </a> </div>
              <div class="icon"> <a href="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39408"
                  target="blank">
                  <div class="ukgc"></div>
                </a> </div>
              <div class="icon"> <a href="https://validator.curacao-egaming.com/validate?domain=www.intercasino.com&seal_id=141a575e2e4b5593af3dc1b19e2517deaa0ed9a17b9f809f1ffd32fa97098f83e664f6df6801db35fd76f6bef7f63663&stamp=ae85a35fb4a6c5816b8b9f17e5b6be96" target="blank">
                  <div class="curacao"></div>
                </a> </div>
              <div class="icon"> <a href="https://www.gamcare.org.uk" target="blank">
                  <div class="gamcare"></div>
                </a> </div>
            </div>
          </div>
          <div class="row">
            <div class="footer-content col-12 text-center">
              <p class="text-center"><a href="https://intercasino.com/about/responsible-gaming"
                  target="blank">ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。</a></p>
            </div>
          </div>
        </div>
      </footer>
    </body>
    `)
  }
})
