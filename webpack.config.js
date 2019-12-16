const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[hash].js'
    filename: 'main.js'
  },
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'lttztt - web',
      template: 'src/index.html'
    }),
  ],
}