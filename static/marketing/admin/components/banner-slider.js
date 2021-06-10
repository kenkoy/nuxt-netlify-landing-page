/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const BANNER_SLIDER = createClass({
  render () {
    const { banners } = this.props

    return (html`
    <section id="banner-slider">
      <div class="container">
        <div class="slider">
        <div>
          <button class="class="n-button n-button--secondary desktop"">続きを読む</button>
          ${banners.map(banner =>
            html`<a href="${banner.url}">
              <img src="${banner.image}"></img>
            </a>`
          )}
          <button class="n-button n-button--secondary">続きを読む</button>
        </div>
      </div>
    </section>
    `)
  }
})
