import { readdir } from 'fs'
import { extname } from 'path'
import { read } from 'gray-matter'

module.exports = {
  retrieveFiles (directory, extension) {
    directory = process.cwd() + directory
    return new Promise((resolve, reject) => {
      readdir(directory, (error, files) => {
        if (error) {
          return reject(error)
        }
        if (extension) {
          return resolve(files.filter(
            file => extname(file) === extension)
          )
        }
        resolve(files)
      })
    })
  },
  retriveFrontMattertoJSON (filePath) {
    filePath = process.cwd() + filePath
    const { data, content } = read(filePath)
    return {
      html: content,
      attributes: data
    }
  }
}
