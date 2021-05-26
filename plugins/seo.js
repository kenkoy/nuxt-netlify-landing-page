
export default ({ app, route }, inject) => {
  inject('seoBuilder', (obj = {}) => {
    const metaTags = metaObjectToArray(obj.meta)

    if (metaTags.filter(t => t.name === 'robots').length === 0) {
      const robotsContent = obj.title && metaTags.filter(t => t.name === 'description').length > 0
        ? 'index,follow'
        : 'noindex'
      metaTags.splice(2, 0, { hid: 'robots', name: 'robots', content: robotsContent })
    }

    return {
      title: obj.title || '',
      meta: metaTags,
      link: linkArray(obj.alternateLinks)
    }
  })

  function metaObjectToArray (metaObj = {}, innerKeyName = '') {
    const metaArray = []
    Object.keys(metaObj).forEach((key) => {
      const value = metaObj[key]
      if (typeof value === 'object') {
        metaArray.push(...metaObjectToArray(value, key))
      } else if (value.replace(/\s/g, '').length) {
        let meta = { hid: key, name: key, content: value }

        if (innerKeyName === 'og') {
          meta = {
            hid: `${innerKeyName}:${key}`,
            property: `${innerKeyName}:${key}`,
            content: value
          }
        }

        if (key === 'author') {
          meta = { hid: key, rel: key, content: value }
        }
        metaArray.push(meta)
      }
    })
    return metaArray
  }

  function linkArray (links = []) {
    return [
      { hid: 'canonical', rel: 'canonical', href: 'https://verajohn.com' + route.path },
      ...links.map((link) => {
        return {
          hid: 'alternate',
          rel: 'alternate',
          href: link.href,
          hreflang: link.hreflang
        }
      })
    ]
  }
}
