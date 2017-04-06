
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './app.js',
    entry: './entry.js'
  },
  context: __dirname + "/src",
  output: {
    path: __dirname + '/dist',
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/src",
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }]
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
          options: {
            loaders: {
              scss: [{
              loader: "style-loader"
              }, {
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }]
            }
          }
        }
      }
    ]
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        chunks: ["app"],
        template: "index.ejs"
      }),
      new CopyWebpackPlugin([{from: "manifest.json"}, {from: "images/chrome-16.png"}, {from: "images/chrome-128.png"}])
  ]
}
