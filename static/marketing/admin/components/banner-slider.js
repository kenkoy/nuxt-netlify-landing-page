/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const BANNER_SLIDER = createClass({
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
      },
      link: { 'border-bottom': 'none' }
    }

    return (html`
    <section id="games">
      <div class="container separator-top separator-bottom">
        <div class="row">
          <div v-for="(game, gameIndex) in mdData.game" :key="gameIndex">
            <a class="n-link" :href="game.url">
              <i v-if="game.isHot" class="hot-icon" />
              <img :src="game.image" :alt="game.title">
              <p class="game-name">{{ game.title }}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
    `)
  }
})
