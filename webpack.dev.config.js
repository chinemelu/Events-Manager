const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const parentDir = path.join(__dirname, './');

module.exports = {
  entry: [
    // 'webpack/hot/only-dev-server',
    'tether',
    'font-awesome/scss/font-awesome.scss',
    path.join(parentDir, 'client/index.js')
  ],
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader'
    }, {
      test: /\.(scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins() {
                // post css plugins, can be exported to postcss.config.js
                return [
                  precss,
                  autoprefixer
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles SASS to CSS
          }
        ]
      })
    },
    {
      test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader']
    },
    {
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader'
        }
      ]
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    },
    {
      test: /font-awesome\.config\.js/,
      use: [
        { loader: 'style-loader' },
        { loader: 'font-awesome-loader' }
      ]
    }
    ]
  },
  output: {
    path: `${parentDir}/dist`,
    filename: 'bundle.min.js',
    publicPath: '/'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    }),
    new ExtractTextPlugin({ filename: 'main.css'}),
    // new TransferWebpackPlugin([
    //   { from: 'client' },
    // ])
  ],
  devServer: {
    contentBase: path.resolve(parentDir, 'client'),
    historyApiFallback: true
  },
};
