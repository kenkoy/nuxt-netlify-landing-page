/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const BANNER_SLIDER = createClass({
  render () {
    const { banner } = this.props

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
    <section id="banner-slider">
      <div class="container">
        <div class="slider">
        <div>
          <button class="class="n-button n-button--secondary desktop"">続きを読む</button>
          <a href="">
            <img src="${banner}"></img>
          </a>
          <button class="n-button n-button--secondary">続きを読む</button>
        </div>
      </div>
    </section>
    `)
  }
})



