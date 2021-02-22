/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'
import { STEPS } from './components/steps.js'
import { GAME_SLIDER } from './components/game-slider.js'
import { FOOTER } from './components/footer.js'

const html = htm.bind(h)
export const VJLP5_PREVIEW = createClass({

  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/vjlp5/previewPane.css'
    document.head.appendChild(link)
  },

  render () {
    const { widgetsFor, widgetFor } = this.props
    const version = widgetsFor('styles').getIn(['data'])

    return (html`
      <body
        class="vjlp5-main"
      >
      </body>
    `)
  }
})
