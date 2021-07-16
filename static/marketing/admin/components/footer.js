/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const FOOTER = createClass({
  setLandingPageURLs (landingPage) {
    let returnURL = {
      ageLimit: '',
      curacao: '',
      ageLimitIcon: '',
      gtIcon: ''
    }
    switch (landingPage) {
      case 'verajohn':
        returnURL = {
          ageLimit: 'https://www.verajohn.com/about/responsible-gaming',
          curacao: 'https://verification.curacao-egaming.com/validateview.aspx?domain=verajohn.com',
          ageLimitIcon: '/marketing/img/footer/20+.svg',
          gtIcon: '/marketing/img/footer/icon_gt.svg'
        }
        break
      case 'intercasino':
        returnURL = {
          ageLimit: 'https://www.intercasino.com/about/responsible-gaming',
          curacao: 'https://verification.curacao-egaming.com/validateview.aspx?domain=intercasino.com',
          ageLimitIcon: '/marketing/img/footer/20+.svg',
          gtIcon: '/marketing/img/footer/icon_gt.svg'
        }
        break
      case 'yuugado':
        returnURL = {
          ageLimit: 'https://www.yuugado.com/about/responsible-gaming',
          curacao: 'https://verification.curacao-egaming.com/validateview.aspx?domain=yuugado.com',
          ageLimitIcon: '/marketing/img/yglp1/icon_age_twenty.svg',
          gtIcon: '/marketing/img/yglp1/icon_gt.svg'
        }
        break
      default:
        returnURL = {
          ageLimit: '#',
          curacao: '#',
          ageLimitIcon: '',
          gtIcon: ''
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
                <img class="twenty-plus" src="${regulatoryURL.ageLimitIcon}" alt="alt img"></img>
              </a>

              <a
                aria-label="Gambling Theraphy"
                target="_blank"
                href="https://www.gamblingtherapy.org/en"
                rel="noopener"
              >
                <img class="gambling-therapy" src="${regulatoryURL.gtIcon}" alt="alt img"></img>
              </a>

              <a
                aria-label="Curacao"
                target="_blank"
                href="${regulatoryURL.curacao}"
              >
                <img class="curacao-regulator" src="https://verification.curacao-egaming.com/validate.ashx?domain=${landingPageType}.com" alt="alt img" />
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
