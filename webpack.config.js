var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// PostCSS
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
  context: path.join(__dirname, ''),
  entry : [ './dev/index.css', './dev/index.js'],
  output: {
      path: __dirname + "/public",
      filename: "bundle.js",
      publicPath: '/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'dev'],
    extensions: ['', '.js', '.css']
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  },
  postcss: function(webpack){
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('precss')(),
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
