const path = require("path")

const path = require('path');

module.exports = {
  mode: 'development', // ou 'production' se for produção
  entry: {
    application: './app/javascript/packs/application.js'
  },
  output: {
    filename: '[name].js', // vai gerar application.js
    path: path.resolve(__dirname, 'public/packs/js') // vai jogar em public/packs/js/
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

