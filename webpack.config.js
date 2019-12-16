const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[hash].js'
    filename: 'main.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, "src")] ,
        exclude: [path.resolve(__dirname, "node_modules")],
        options: {
          presets: ["env", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  }
}