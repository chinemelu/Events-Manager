const webpack = require('webpack');
const path = require('path');

const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'client/App.js')
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }
    ]
  },
  output: {
    path: `${parentDir}/client`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(parentDir, 'client'),
    historyApiFallback: true
  }
};
