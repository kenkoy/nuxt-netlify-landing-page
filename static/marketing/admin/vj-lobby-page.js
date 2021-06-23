/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const VJ_LOBBY_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/lobby-page/verajohn/previewPane.css'
    document.head.appendChild(link)
  },
  render () {
    const { widgetsFor, widgetFor } = this.props

    const banners = widgetsFor('banner')

    const gameList = widgetsFor('game').getIn(['data', 'game_list'])
    const gameListCategory = widgetsFor('game').getIn(['data', 'game_icons_title']) || []
    const gameListViewAll = widgetsFor('game').getIn(['data', 'all_games_title']) || []

    const lobbyTiles = widgetsFor('lobby_tiles').getIn(['data', 'lobby_list']) || []
    const lobbyCategory = widgetsFor('lobby_tiles').getIn(['data', 'lobby_tiles_title']) || []
    const body = widgetFor('body')

    return (html`
      <body class="layout-css lobby_pages_wrapper">
        <div class="lobby-pages-main vj-theme">
          <main>
            <header id="header-menu">
              <div id="header-home">
                <a href="#">
                  <img class="logo" src="/marketing/img/lobby-pages/verajohn/home-icon.png" alt="alt img"/>
                </a>
              </div>
              <div id="header-logo">
                <img class="logo" src="/marketing/img/lobby-pages/verajohn/logo.png" alt="alt img"/>
              </div>
              <div id="header-button">
                <button class="cta_button login n-button--secondary">
                  <a href='#'>
                    Join Now
                  </a>
                </button>
              </div>
            </header>

            <section id="banner-slider">
              <div class="container">
                <div class="carousel" aria-label="Gallery">
                  <ol class="carousel__viewport">
                    ${banners.filter(sect => !!sect)
                      .filter(sect => typeof sect.getIn(['data']) !== 'undefined')
                      .map(sect =>
                      html`
                      <li tabindex="0" class="carousel__slide">
                        <a href='${sect.getIn(['data', 'url'])}'>
                          <img src='${sect.getIn(['data', 'image'])}' />
                          <p>${sect.getIn(['data', 'title'])}</p>
                        </a>
                        <div class="carousel__snapper"></div>
                      </li>
                      `
                    )}
                  </ol>
                </div>
              </div>
            </section>

            <section id="games">
              <div class="container separator-top separator-bottom">
                <div class="row negate-gutter">
                  <div class="left-align">
                    <p class="emphasize">${gameListCategory}</p>
                  </div>
                  <div class="right-align">
                    <p class="view-all">${gameListViewAll}</p>
                  </div>
                </div>

                <div class="row">
                  ${gameList.filter(sect => !!sect).map((sect) => {
                    const list = sect.toJS()
                    return html`
                    <div>
                      <a class="n-link" href='${list.url}'>
                        ${list.is_hot === true
                          ? html`
                            <i class="hot-icon">
                              <img width='100%' src="/marketing/img/lobby-pages/verajohn/hot-icon.png"/>
                            </i>
                          `
                          : ''
                        }
                        <img src='${list.image}' />
                        <p>${list.title}</p>
                      </a>
                    </div>
                    `
                  })}
                </div>
              </div>
            </section>

            <section id="lobby-tiles">
              <div class="container">
                <div class="row negate-gutter">
                  <div class="left-align">
                    <p class="emphasize">${lobbyCategory}</p>
                  </div>
                </div>
                <div class="row game-menu negate-gutter">
                  ${lobbyTiles.filter(sect => !!sect).map((sect) => {
                    const list = sect.toJS()
                    return html`
                    <div class="pods">
                      <a href='${list.link}'>
                        <div>
                          <div class="pod-content">
                            <h3 class="emphasize">${list.title}</h3>
                            <img class="pod-feat-img" src='${list.image}' />
                          </div>
                        </div>
                      </a>
                    </div>
                    `
                  })}
                </div>
              </div>
            </section>

            <section id="cta">
              <img src="/marketing/img/lobby-pages/verajohn/footer-verajohn.png" alt="alt img" />
              <div class="footer-item">
                <a class="n-link" href="/ja/help">
                  <img src="/marketing/img/lobby-pages/verajohn/help-icon.png" alt="alt img" />
                  <span class="n-paragraph">ヘルプ・センター</span>
                </a>
              </div>
              <div class="footer-item">
                <a class="n-link" href="/ja/about/beginnersguidemb">
                  <img src="/marketing/img/lobby-pages/verajohn/beginner-guide-icon.png" alt="alt img" />
                  <span class="n-paragraph">ビギナーズガイド</span>
                </a>
              </div>
            </section>

            <section id="seo-contents">
              <div class="container">
                <div class="row negate-gutter">
                  ${body}
                </div>
              </div>
            </section>

            <footer id="footer-icon-wrapper">
              <div class="container footer-icons">
                <div id="footer-payment-provider">
                <div class="row">
                  <p class="footer-title">
                    入出金方法
                  </p>
                </div>
                <div class="row">
                  <div>
                    <img src="/marketing/img/lobby-pages/verajohn/master-icon.png" alt="alt img"></img>
                    <img src="/marketing/img/lobby-pages/verajohn/venus-point-icon.png" alt="alt img"></img>
                    <img src="/marketing/img/lobby-pages/verajohn/bitcoin-icon.png" alt="alt img"></img>
                    <img src="/marketing/img/lobby-pages/verajohn/playsafe-icon.png" alt="alt img"></img>
                    <img src="/marketing/img/lobby-pages/verajohn/eco-icon.png" alt="alt img"></img>
                    <img src="/marketing/img/lobby-pages/verajohn/i-wallet-icon.png" alt="alt img"></img>
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
                      <img src="/marketing/img/lobby-pages/verajohn/e-icon.png" alt="alt img"></img>
                    </div>
                  </div>
                </div>
                <div id="footer-logo">
                  <div class="row">
                  <div>
                    <img src="https://verification.curacao-egaming.com/validate.ashx?domain=verajohn.com" alt="alt img"></img>
                    <img src="/marketing/img/lobby-pages/verajohn/20+.svg" alt="alt img"></img>
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
          <aside id="footer-login-register">
            <button class="n-button n-button--secondary">
              ログイン
            </button>
            <button class="n-button n-button--primary">
              今すぐ登録しよう!
            </button>
          </aside>
        </div>
      </body>
    `)
  }
})
