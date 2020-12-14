/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const VJLP3_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/vjlp3/previewPane.css'
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
      '--bg-banner': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_banner']) || ''}')`,
      '--game-icon-1': `url('${banner.getIn(['data', 'game_images', 'game_icon_1'])}')`,
      '--game-icon-2': `url('${banner.getIn(['data', 'game_images', 'game_icon_2'])}')`,
      '--game-icon-3': `url('${banner.getIn(['data', 'game_images', 'game_icon_3'])}')`,
      '--game-icon-4': `url('${banner.getIn(['data', 'game_images', 'game_icon_4'])}')`,
      '--game-icon-5': `url('${banner.getIn(['data', 'game_images', 'game_icon_5'])}')`
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
      <header>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <a href="#" class="bf-logo"></a>
              <div class="bf-btn-container">
                <a id="login-btn" href="${banner.getIn(['data', 'promo_login_button_redirect_url'])}">
                  <div class="bf-button bf-third-bg">${banner.getIn(['data', 'promo_login_button'])}</div>
                </a>
                <a id="signup-btn" href="${banner.getIn(['data', 'promo_join_button_redirect_url'])}">
                  <div class="bf-button bf-secondary-bg">
                    <p><span class="prev-join-button">${banner.getIn(['data', 'promo_join_button'])}</span></p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="bf-banner">
        <div class="container">
          <div class="row">
            <div id="bf-banner-img-2" class="col-lg-12">
              <h1>${bannerTitle}</h1>

              <h2></h2>

              <a class="signup-btn d-none d-lg-block" href="${banner.getIn(['data', 'promo_join_button_redirect_url'])}">
                <div class="bf-button bf-secondary-bg" style='${joinBtnStyle}'>${banner.getIn(['data', 'promo_join_button'])}</div>
              </a>

            </div>
            <div class="d-block d-lg-none col-12">
              <div class="center-button">

                <a class="signup-btn" href="${banner.getIn(['data', 'promo_join_button_redirect_url'])}">
                  <div class="bf-button bf-secondary-bg" style='${bottomJoinBtnStyle}'>
                    <p><span class="prev-join-button">${banner.getIn(['data', 'promo_join_button'])}</span></p>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bf-game-slider">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="slider slick-initialized slick-slider">
                <div class="slick-list draggable">
                  <div class="slick-track prev-game-slider"><a
                      href="${banner.getIn(['data', 'game_images', 'game_url_3'])}" class="hvr-shrink slick-slide slick-cloned prev-game-icon"
                      tabindex="-1" data-slick-index="-3" aria-hidden="true">
                      <div class="bf-game-icon-3"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_4'])}"
                      class="hvr-shrink slick-slide slick-cloned prev-game-icon" tabindex="-1" data-slick-index="-2"
                      aria-hidden="true">
                      <div class="bf-game-icon-4"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_5'])}" class="hvr-shrink slick-slide slick-cloned prev-game-icon"
                      tabindex="-1" data-slick-index="-1" aria-hidden="true">
                      <div class="bf-game-icon-5"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_1'])}" class="hvr-shrink slick-slide prev-game-icon"
                      tabindex="-1" data-slick-index="0" aria-hidden="true">
                      <div class="bf-game-icon-1"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_2'])}" class="hvr-shrink slick-slide prev-game-icon"
                      tabindex="-1" data-slick-index="1" aria-hidden="true">
                      <div class="bf-game-icon-2"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_3'])}"
                      class="hvr-shrink slick-slide slick-current slick-active prev-game-icon" tabindex="0"
                      data-slick-index="2" aria-hidden="false">
                      <div class="bf-game-icon-3"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_4'])}"
                      class="hvr-shrink slick-slide slick-active prev-game-icon" tabindex="0" data-slick-index="3"
                      aria-hidden="false">
                      <div class="bf-game-icon-4"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_5'])}" class="hvr-shrink slick-slide slick-active prev-game-icon"
                      tabindex="0" data-slick-index="4" aria-hidden="false">
                      <div class="bf-game-icon-5"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_1'])}"
                      class="hvr-shrink slick-slide slick-cloned prev-game-icon" tabindex="-1" data-slick-index="5"
                      aria-hidden="true">
                      <div class="bf-game-icon-1"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_2'])}"
                      class="hvr-shrink slick-slide slick-cloned prev-game-icon" tabindex="-1" data-slick-index="6"
                      aria-hidden="true">
                      <div class="bf-game-icon-2"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_3'])}"
                      class="hvr-shrink slick-slide slick-cloned prev-game-icon" tabindex="-1" data-slick-index="7"
                      aria-hidden="true">
                      <div class="bf-game-icon-3"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_4'])}"
                      class="hvr-shrink slick-slide slick-cloned prev-game-icon" tabindex="-1" data-slick-index="8"
                      aria-hidden="true">
                      <div class="bf-game-icon-4"></div>
                    </a><a href="${banner.getIn(['data', 'game_images', 'game_url_5'])}" class="hvr-shrink slick-slide slick-cloned prev-game-icon"
                      tabindex="-1" data-slick-index="9" aria-hidden="true">
                      <div class="bf-game-icon-5"></div>
                    </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ${body}
      <footer id="footer" class="animated fadeIn">
        <div class="container-fluid pp">
          <div class="container">
            <div class="row">
              <div class="col-12"> </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="icons text-center">
                <div class="icon"> <a href="https://www.verajohn.com/about/responsible-gaming" target="blank">
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
                <div class="icon"> <a href="#" target="blank">
                    <div class="curacao"></div>
                  </a> </div>
                <div class="icon"> <a href="https://www.gamcare.org.uk" target="blank">
                    <div class="gamcare"></div>
                  </a> </div>
              </div>
            </div>
            <div class="row">
              <div class="footer-content col-12 text-center">
                <p class="text-center"><a href="https://verajohn.com/about/responsible-gaming"
                  target="blank">ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>`
    )
  }
})
