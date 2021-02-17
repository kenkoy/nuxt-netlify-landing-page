/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const GAME_SLIDER = createClass({
  render () {
    const { games } = this.props

    const styles = {
      gameSlider: {
        'box-shadow': '0px 5px 5px 0px rgba(0,0,0,0.2)',
        padding: '10px 0'
      },
      container: {
        display: 'block',
        padding: '0 10%'
      },
      slider: {
        display: 'flex',
        'justify-content': 'space-evenly'
      }
    }

    return (html`
    <section id="game-slider" style=${styles.gameSlider}>
      <div style=${styles.container}>
        <div style=${styles.slider}>
          ${games.map(game =>
            html`<a href="${game.link}"><img src="${game.icon}"></img></a>`
          )}
        </div>
      </div>
    </section>
    `)
  }
})
