const fs = require('fs/promises')
const axios = require('axios')

const gameDataPath = './assets/content/games.json'

axios.get('https://www.verajohn.com/ajax/load/data/games/INTERNAL/ALL_GAMES/default/asc/all')
  .then((res) => {
    const jsonData = JSON.stringify(res.data)
    fs.writeFile(gameDataPath, jsonData, 'utf-8')
  })
  .then((res) => {
    // eslint-disable-next-line no-console
    console.log('Successfully saved game data to ' + gameDataPath)
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log('error')
    // eslint-disable-next-line no-console
    console.log(error)
  })
