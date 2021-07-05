export default ({ app }, inject) => {
  inject('seoContent', (htmlString) => {
    return insertBrandClass(htmlString)
  })

  function insertBrandClass (htmlString) {
    let lobbyPageContent = ''
    const htmlObject = document.createElement('div')
    const typographyType = [
      'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A'
    ]
    htmlObject.insertAdjacentHTML('beforeend', htmlString)

    typographyType.forEach((type) => {
      const elements = htmlObject
        .querySelectorAll(type)

      if (elements.length) {
        elements.forEach((element) => {
          switch (element.nodeName) {
            case 'H1':
              element.classList.add('n-header-1')
              break
            case 'H2':
              element.classList.add('n-header-2')
              break
            case 'H3':
              element.classList.add('n-header-3')
              break
            case 'H4':
              element.classList.add('n-header-4')
              break
            case 'H5':
              element.classList.add('n-header-5')
              break
            case 'H6':
              element.classList.add('n-header-6')
              break
            case 'P':
              element.classList.add('n-paragraph')
              break
            case 'A':
              element.classList.add('n-link')
              break
            default:
              break
          }
        })
      }
    })
    if (htmlObject.innerHTML) {
      lobbyPageContent = htmlObject.innerHTML
    }
    return lobbyPageContent
  }
}
