/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const STEPS = createClass({
  render () {
    const { steps } = this.props

    return (html`
    <section id="steps">
      <div class="container">
        <div class="animated fadeIn delay-halfs">
          <span class="num">1</span>
          <div>
            <h3>${steps[0].title}</h3>
            <p>${steps[0].description}</p>
          </div>
        </div>
        <div class="animated fadeIn delay-1s">
          <span class="num">2</span>
          <div>
          <h3>${steps[1].title}</h3>
          <p>${steps[1].description}</p>
          </div>
        </div>
        <div class="animated fadeIn delay-1-and-halfs">
          <span class="num">3</span>
          <div>
            <h3>${steps[2].title}</h3>
            <p>${steps[2].description}</p>
          </div>
        </div>
      </div>
    </section>
    `)
  }
})
