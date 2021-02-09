/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const FOOTER = createClass({
  setLandingPageURL (landingPage) {
    let returnURL = ''
    switch (landingPage) {
      case 'verajohn':
        returnURL = 'https://www.verajohn.com/about/responsible-gaming'
        break
      case 'intercasino':
        returnURL = 'https://www.intercasino.com/about/responsible-gaming'
        break
      default:
        returnURL = '#'
        break
    }
    return returnURL
  },

  render () {
    const { landingPageType } = this.props
    const responsibleGamingURL = this.setLandingPageURL(landingPageType)

    return (html`
      <footer className="${landingPageType}">
        <div class="container">
          <div>
            <div id="footer-icon">
              <a
                aria-label="Responsible Gaming"
                target="_blank"
                href="${responsibleGamingURL}"
                rel="noopener"
              >
                <img class="reg-icon" src="../img/footer/20+.svg" alt="alt img"></img>
              </a>

              <a
                aria-label="Gambling Theraphy"
                target="_blank"
                href="https://www.gamblingtherapy.org/en"
                rel="noopener"
              >
                <img src="../img/footer/icon_gt.svg" alt="alt img"></img>
              </a>

              <a
                aria-label="Curacao"
                target="_blank"
                href="#"
              >
                <img class="reg-icon ceg-icon" src="../img/footer/CEG_logo.png" alt="alt img"></img>
              </a>
            </div>

            <p>
              <a
                aria-label="Responsible Gaming"
                target="blank"
                href="${responsibleGamingURL}"
                rel="noopener"
              >
                ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。
              </a>
            </p>

            <p>当ウェブサイトは、キュラソー政府の商業登記に登録されている、番号149132のBreckenridge Curacao B.V.（登録住所：Emancipatie Boulevard, Dominico F. “Don” Martina 31, Willemstad, Curaçao）により運営されています。</p>
            <p>Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #5536/JAZに基づく C.I.L Curacao Interavtive Licensing N.V. により付与されたサブライセンスを通して正式な許可を所持しています</p>
          </div>
        </div>
      </footer>
    `)
  }
})
