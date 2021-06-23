/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'
import { FOOTER } from './components/footer.js'

const html = htm.bind(h)
export const ICLP2_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/iclp2/previewPane.css'
    document.head.appendChild(link)
  },
  statementsParser (statements, highligtedPhrase, classStyle) {
    let sentences = statements.split(/\r?\n/)
      .filter(statement => statement)
      .map((statement) => {
        return statement.slice(-1) === '\\'
          ? statement.substring(0, statement.length - 1)
          : statement
      })
    if (highligtedPhrase && classStyle) {
      const replacement = `<span class="${classStyle}">${highligtedPhrase}</span>`
      sentences = sentences.map((line) => {
        return line.includes(highligtedPhrase)
          ? line.replace(highligtedPhrase, replacement)
          : line
      })
    }
    return sentences.reduce((oldVal, newVal) => {
      return oldVal + '<br />' + newVal
    })
  },
  render () {
    const { widgetFor, widgetsFor } = this.props
    const locale = widgetsFor('promo_locale')
    const banner = widgetsFor('promo_banner')
    const topGame = widgetsFor('top_game_section')
    const history = widgetsFor('history_section')
    const welcome = widgetsFor('welcome_section')
    const body = widgetFor('body')

    const promoBgDesktop = banner.getIn(['data', 'promo_images', 'promo_bg_desktop'])
    const promoBgMobile = banner.getIn(['data', 'promo_images', 'promo_bg_mobile'])
    const promoBannerImage1 = banner.getIn(['data', 'promo_images', 'promo_banner_image_title_1'])
    const promoBannerImage2 = banner.getIn(['data', 'promo_images', 'promo_banner_image_title_2'])

    const country = locale.getIn(['data', 'promo_country_code'])
    const language = locale.getIn(['data', 'promo_language_code'])

    const bannerStatement = {
      __html: this.statementsParser(
        banner.getIn(['data', 'promo_banner_statement']),
        banner.getIn(['data', 'promo_banner_highlighted_phrase']),
        'redmark'
      )
    }

    const firstWelcomeStatement = {
      __html: this.statementsParser(
        welcome.getIn(['data', 'welcome_first_statement']),
        welcome.getIn(['data', 'welcome_first_statement_highlighted_phrase']),
        'redmark'
      )
    }

    const secondWelcomeStatement = {
      __html: this.statementsParser(
        welcome.getIn(['data', 'welcome_second_statement']),
        null,
        null
      )
    }

    const rougeSpeechStatement = {
      __html: this.statementsParser(
        welcome.getIn(['data', 'welcome_rouge_speech_bubble']),
        null,
        null
      )
    }

    const chloeSpeechStatement = {
      __html: this.statementsParser(
        welcome.getIn(['data', 'welcome_chloe_speech_bubble']),
        null,
        null
      )
    }

    const historyRougeParsedStatement = {
      __html: this.statementsParser(
        history.getIn(['data', 'history_rouge_statement']),
        history.getIn(['data', 'history_rouge_highlighted_phrase']),
        'redmark'
      )
    }

    const historyChloeParsedStatement = {
      __html: this.statementsParser(
        history.getIn(['data', 'history_chloe_statement']),
        history.getIn(['data', 'history_chloe_highlighted_phrase']),
        'blackmark'
      )
    }

    const cssBg = {
      '--bg-image': `url('${promoBgDesktop}')`,
      '--bg-image-m': `url('${promoBgMobile}')`,
      '--desktop-width-banner': banner.getIn(['data', 'desktop_full']) ? 'cover' : 'contain',
      '--mobile-width-banner': banner.getIn(['data', 'mobile_full']) ? 'cover' : 'contain'
    }

    return (html`
    <body
      id="${locale.getIn(['data', 'promo_language_code'])}-${locale.getIn(['data', 'promo_country_code'])}"
      class="layout-css iclp2_wrapper"
    >
      <div
        class="iclp2-main"
      >
      <section id="hero" style='${cssBg}'>
        <div class="container">
          <div class="row">
            <div class="loginbtn btn-login">
              <a rel="noopener" href="${banner.getIn(['data', 'promo_login_button_redirect_url'])}">
                <i class="material-icons">home</i>
                <p class="login-text">${banner.getIn(['data', 'promo_login_button_text'])}</p>
              </a>
            </div>
            <div>
              <div id="header-text-wrapper">
                <img class="animated fadeIn" alt="alt img" src="/marketing/img/iclp2/logo.png"></img>
                <img class="animated fadeIn" alt="alt img" src="${promoBannerImage1}"></img>
                <img class="animated tada delay-1s" alt="alt img" src="${promoBannerImage2}"></img>
              </div>
              <div class="separation-star">
                ${bannerStatement !== ''
                ? html`<p dangerouslySetInnerHTML='${bannerStatement}'></p>`
                : ''}
                <button class="btn-register" onclick="location.href='#'" type="button">
                  <a rel="noopener" href="${banner.getIn(['data', 'promo_register_button_redirect_url'])}">
                    ${banner.getIn(['data', 'promo_register_button_text'])}
                  </a>
                </button>
                <p>
                  <a rel="noopener" href="${banner.getIn(['data', 'promo_smallterm_redirect_url'])}">
                    ${banner.getIn(['data', 'promo_smallterm_text_link'])}
                  </a>
                  ${banner.getIn(['data', 'promo_smallterm_text'])}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="detail">
        <div class="container">
          <div class="row">
            <div>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-welcome-title.png"></img>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-500WC-stamp.png"></img>
              ${firstWelcomeStatement !== ''
              ? html`<p dangerouslySetInnerHTML='${firstWelcomeStatement}'></p>`
              : ''}
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row column-2">
            <div>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph1.png"></img>
            </div>
            <div>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph2.png"></img>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="separation-star">
              ${secondWelcomeStatement !== ''
              ? html`<p class="text-center" dangerouslySetInnerHTML='${secondWelcomeStatement}'></p>`
              : ''}
            </div>
          </div>
        </div>
        <div id="testimonials">
          <div class="container">
            <div class="row">
              <summary>
                <h3>初めまして、ごきげんよう!</h3>
                ${rougeSpeechStatement !== ''
                ? html`<p class="text-center" dangerouslySetInnerHTML='${rougeSpeechStatement}'></p>`
                : ''}
              </summary>
              <div class="feature-img">
                <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-red-icon.png"></img>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="feature-img">
                <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-black-icon.png"></img>
              </div>
              <summary>
                <h3>チャオ! クロエだよ★</h3>
                ${chloeSpeechStatement !== ''
                ? html`<p class="text-center" dangerouslySetInnerHTML='${chloeSpeechStatement}'></p>`
                : ''}
              </summary>
            </div>
          </div>
        </div>
      </section>
      <section id="golden-separation">
        <div class="container">
          <div class="row">
            <div>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame1.png"></img>
            </div>
          </div>
        </div>
      </section>
      <section id="games">
        <div class="container game-first-section">
          <div>
            <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame2.png"></img>
          </div>
        </div>
        <div class="container game-second-section">
          <div class="row column-2">
            <div>
              <img alt="alt img" src="${topGame.getIn(['data', 'top_game_game1'])}"></img>
              <img alt="alt img" src="${topGame.getIn(['data', 'top_game_game2'])}"></img>
            </div>
            <div>
              <img alt="alt img" src="${topGame.getIn(['data', 'top_game_game3'])}"></img>
              <img alt="alt img" src="${topGame.getIn(['data', 'top_game_game4'])}"></img>
            </div>
          </div>
        </div>
        <div class="container game-third-section">
          <div class="row column-2">
            <div>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-topgame-CS.png"></img>
            </div>
            <div>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-topgame-MOBILE.png"></img>
            </div>
          </div>
        </div>
      </section>
      <section id="loyalty-program">
        <div class="container">
          <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty1.png" data-not-lazy></img>
        </div>
        <div class="container">
          <div class="row">
            <div>
              <p>レベルが上がるとカジノ内での <span>地位向上</span> !</p>
              <p><span>レベル7の最高ランク</span>、 <em class="redmark">インター大公</em>ではあの●●アイテムが出現 !?</p>
            </div>
          </div>
        </div>
        <div class="container">
          <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty2.png"></img>
        </div>
        <div class="container">
          <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-Loyalty3.png"></img>
        </div>
      </section>
      <section id="gradient-separation">
        <div class="container">
          <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-safe-title.png"></img>
        </div>
      </section>
      <section id="pods">
        <div class="container">
          <div class="row">
            <figure>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-safe-fair.png"></img>
            </figure>
            <figure>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-safe-visa.png"></img>
            </figure>
            <figure>
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-safe-wa.png"></img>
            </figure>
          </div>
        </div>
      </section>
      <section id="history">
        <div class="container">
          <div>
            <div class="desktop">
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-History1.png"></img>
            </div>
            <div class="mobile">
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-History2.png"></img>
            </div>
          </div>
        </div>
        <div class="container">
          <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-queenprofile-title.png"></img>
        </div>
        <div class="container">
          <div class="row column-2">
            <div>
              <div class="title">
                <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-queenprofile.png" data-not-lazy></img>
              </div>
              ${historyRougeParsedStatement !== ''
              ? html`<p class="separation-star" dangerouslySetInnerHTML='${historyRougeParsedStatement}'></p>`
              : ''}
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-Rouge.png"></img>
            </div>

            <div>
              <div class="title">
                <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-queenprofile.png" data-not-lazy></img>
              </div>
              ${historyChloeParsedStatement !== ''
              ? html`<p class="separation-star" dangerouslySetInnerHTML='${historyChloeParsedStatement}'></p>`
              : ''}
              <img alt="alt img" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-Chole.png"></img>
            </div>
          </div>
        </div>
        <div class="container">
          <button class="warning btn-register">
            <a rel="noopener" href="${history.getIn(['data', 'history_register_button_redirect_url'])}">${history.getIn(['data', 'history_register_button_text'])}</a>
          </button>
        </div>
      </section>
      <section id="payment">
        <div class="container">
          <img alt="alt img" class="desktop" src="/marketing/img/ic-payment/payment_large_jp.svg"></img>
          <img alt="alt img" class="mobile" src="/marketing/img/ic-payment/payment_jp.svg"></img>
        </div>
      </section>
      <section id="terms">
        <div class="container">
          <div>
            <div>
              ${body}
            </div>
            <ul>
              <li>
                通常の
                <a href="https://intercasino.com/about/terms-and-conditions">利用規約</a>と
                <a href="https://intercasino.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <${FOOTER} landingPageType="intercasino" languageCode=${language} countryCode=${country} />
      </section>
    </div>
    </body>
    `)
  }
})
