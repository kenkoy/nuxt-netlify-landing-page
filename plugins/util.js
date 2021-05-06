export default ({ app }, inject) => {
  inject('toCamelCase', (obj) => {
    return keysToCamel(obj)
  })

  function toCamel (str) {
    return str.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '')
    })
  }

  function isObject (obj) {
    return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function'
  }

  function keysToCamel (obj) {
    if (isObject(obj)) {
      const n = {}

      Object.keys(obj)
        .forEach((k) => {
          n[toCamel(k)] = keysToCamel(obj[k])
        })

      return n
    } else if (Array.isArray(obj)) {
      return obj.map((i) => {
        return keysToCamel(i)
      })
    }
    return obj
  }
}
