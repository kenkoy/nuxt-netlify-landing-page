/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const GAME_SLIDER = createClass({
  render () {
    // const { games } = this.props

    const styles = {
      gameSlider: {
        boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.2)',
        padding: '10px 0'
      },
      container: { display: 'block' }
    }

    return (html`
    <section style=${styles.gameSlider}>
      <div style=${styles.container}>
      </div>
    </section>
    `)
  }
})
