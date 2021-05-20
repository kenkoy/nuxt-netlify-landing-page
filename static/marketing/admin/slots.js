/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const SLOTS_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/slots/previewPane.css'
    document.head.appendChild(link)
  },
  render () {
  return (html`
  <body class="layout-css lobby_pages_wrapper">
    <div class="lobby-pages-main">
      <main>
        <header id="header-menu">
          <div>
            <button class="btn menu-hamburger">
              <div>
                <span />
                <span />
                <span />
              </div>
              <p class="n-paragraph-1">
                メニュー
              </p>
            </button>
          </div>
          <div id="header-logo">
            <img class="logo" src="/marketing/img/lobby-pages/logo.png" alt="alt img"></img>
          </div>
          <div id="header-button">
            <button class="cta_button cta_important login">
              今すぐ登録しよう!
            </button>
          </div>
        </header>

        <section id="game-tiles">
        </section>

        <section id="cta">
          <img src="/marketing/img/lobby-pages/footer-verajohn.png" alt="alt img"></img>
          <div class="footer-item">
            <a class="n-link" href="/ja/help">
              <img src="/marketing/img/lobby-pages/help-icon.png" alt="alt img"></img>
              <span class="n-paragraph">ヘルプ・センター</span>
            </a>
          </div>
          <div class="footer-item">
            <a class="n-link" href="/ja/about/beginnersguidemb">
              <img src="/marketing/img/lobby-pages/beginner-guide-icon.png" alt="alt img"></img>
              <span class="n-paragraph">ビギナーズガイド</span>
            </a>
          </div>
        </section>

        <section id="seo-contents">
          <div class="container">
            <div class="row negate-gutter">
              <div v-html="mdData.content" />
            </div>
          </div>
        </section>

        <footer id="footer-icon-wrapper">
          <div class="container footer-icons-wrapper">
            <div id="footer-payment-provider">
            <div class="row">
              <p class="footer-title">
                入出金方法
              </p>
            </div>
            <div class="row">
              <div>
                <img src="/marketing/img/lobby-pages/visa-icon.png" alt="alt img"></img>
                <img src="/marketing/img/lobby-pages/master-icon.png" alt="alt img"></img>
                <img src="/marketing/img/lobby-pages/venus-point-icon.png" alt="alt img"></img>
                <img src="/marketing/img/lobby-pages/bitcoin-icon.png" alt="alt img"></img>
                <img src="/marketing/img/lobby-pages/playsafe-icon.png" alt="alt img"></img>
                <img src="/marketing/img/lobby-pages/eco-icon.png" alt="alt img"></img>
                <img src="/marketing/img/lobby-pages/i-wallet-icon.png" alt="alt img"></img>
              </div>
            </div>
            </div>
            <div id="footer-providers">
              <div class="row">
                <p class="footer-title">
                  ゲーム配信会社
                </p>
              </div>
              <div class="row">
                <div>
                  <img src="/marketing/img/lobby-pages/e-icon.png" alt="alt img"></img>
                </div>
              </div>
            </div>
            <div id="footer-logo">
              <div class="row">
              <div>
                <img src="/marketing/img/lobby-pages/CEG_logo.png" alt="alt img"></img>
                <img src="/marketing/img/lobby-pages/20+.svg" alt="alt img"></img>
              </div>
              <div>
                <span class="footer-text">
                当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。<br />
                Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。
                </span>
              </div>
              </div>
            </div>
          </div>
          <div class="container">
            <a class="n-link" href="https://www.play-wise.com/verajohn-jp/">ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。</a>
          </div>
        </footer>
      </main>
    </div>
  </body>
    `)
  }
})
