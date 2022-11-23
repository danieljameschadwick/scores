var path = require('path');
var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Transform all ES6 files to plain old ES5.
      {
        test: /\.(js|jsx)$/,
        exclude: [/bower_components/, /node_modules/, /styles/],
        loader: 'babel',
        include: path.resolve(__dirname, '../src')
      },
      // Fonts
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        query: {
          name: 'static/media/files/[name].[hash:8].[ext]'
        }
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/fonts/[name].[hash:8].[ext]'
        }
      },
      // Load images.
      {
        test: /\.(gif|jpe?g|png)$/,
        loader: 'url-loader?limit=25000',
        query: {
          limit: 10000,
          name: 'static/media/images/[name].[hash:8].[ext]'
        }
      },
      // jSon Loader
      {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass!resolve-url!sass?sourceMap&sourceComments'
      }, {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1'
      }
    ]
  }
};
