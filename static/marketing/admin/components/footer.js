/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const FOOTER = createClass({
  setLandingPageURLs (landingPage) {
    let returnURL = {
      ageLimit: '',
      curacao: ''
    }
    switch (landingPage) {
      case 'verajohn':
        returnURL = {
          ageLimit: 'https://www.verajohn.com/about/responsible-gaming',
          curacao: 'https://validator.curacao-egaming.com/validate?domain=www.verajohn.com&seal_id=cc15cb374804a763a5f82ff0a72fd6b436659d0061b3201e86431fa8afff305e39a7bbbadf89ae9274d2e9ee4bd923c3&stamp=ae85a35fb4a6c5816b8b9f17e5b6be96'
        }
        break
      case 'intercasino':
        returnURL = {
          ageLimit: 'https://www.intercasino.com/about/responsible-gaming',
          curacao: 'https://validator.curacao-egaming.com/validate?domain=www.intercasino.com&seal_id=141a575e2e4b5593af3dc1b19e2517deaa0ed9a17b9f809f1ffd32fa97098f83e664f6df6801db35fd76f6bef7f63663&stamp=ae85a35fb4a6c5816b8b9f17e5b6be96'
        }
        break
      default:
        returnURL = {
          ageLimit: '#',
          curacao: '#'
        }
        break
    }
    return returnURL
  },

  render () {
    const { landingPageType } = this.props
    const regulatoryURL = this.setLandingPageURLs(landingPageType)

    return (html`
      <footer className="${landingPageType}">
        <div class="container">
          <div>
            <div id="footer-icon">
              <a
                aria-label="Responsible Gaming"
                target="_blank"
                href="${regulatoryURL.ageLimit}"
                rel="noopener"
              >
                <img class="reg-icon" src="/marketing/img/footer/20+.svg" alt="alt img"></img>
              </a>

              <a
                aria-label="Gambling Theraphy"
                target="_blank"
                href="https://www.gamblingtherapy.org/en"
                rel="noopener"
              >
                <img src="/marketing/img/footer/icon_gt.svg" alt="alt img"></img>
              </a>

              <a
                aria-label="Curacao"
                target="_blank"
                href="${regulatoryURL.curacao}"
              >
                <img class="reg-icon ceg-logo" src="/marketing/img/footer/CEG_logo.png" alt="alt img"></img>
              </a>
            </div>

            <p>
              <a
                aria-label="Responsible Gaming"
                target="blank"
                href="${regulatoryURL.ageLimit}"
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
