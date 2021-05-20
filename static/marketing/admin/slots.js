/* eslint-disable no-undef */
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)
export const SLOTS_PREVIEW = createClass({
  componentDidMount () {
    const { document } = this.props
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/marketing/styles/slots/previewPane.css'
    document.head.appendChild(link)
  },
  render () {
  return (html`
  <body class="layout-css lobby_pages_wrapper">
  TEST
  </body>
    `)
  }
})
