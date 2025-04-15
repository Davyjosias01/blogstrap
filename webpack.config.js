const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    application: "./app/javascript/packs/application.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/packs/js")
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
  
}
