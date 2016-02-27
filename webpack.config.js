var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// PostCSS
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
  entry : [
    './dev/',
    'file?name=index.html!./public/index.html'
  ],
  output: {
      path: __dirname + "/public",
      filename: "bundle.js",
      publicPath: '/public/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'dev'],
    extensions: ['', '.js', '.css']
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss'
      }
    ]
  },
  postcss: function(webpack){
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('precss')(),
      require('postcss-url'),
      require('postcss-cssnext')(),
      require('postcss-custom-properties')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('./styles.css'),
      new webpack.DefinePlugin({
          __DEVELOPMENT__: true,
          __PRODUCTION__: false
      })
    ]
}
