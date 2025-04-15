const { environment } = require('@rails/webpacker')

module.exports = environment

const path = require('path')

environment.config.merge({
  entry: {
    application: path.resolve(__dirname, '../../app/javascript/packs/application.js')
  }
})

module.exports = environment
