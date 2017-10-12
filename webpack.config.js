const path = require('path');
const webpack = require('webpack');
// if we want to create a sseparate css file we
// need this module

module.exports = {
  watch: true,
  context: path.resolve(__dirname, './'),
  entry: {
    main: './assets/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: './assets/js/[name].bundle.js'
  },
  // if we want to refernce our css within the js this is the way to go
  // but it seems a bit odd to require('style.css') in a css file.
  // Still - this would add the css to the head of the index.html file
  // module: {
  //   loaders: [
  //           {test: /\.css$/, loader: 'style-loader!css-loader'}
  //   ]
  // },
  devServer: {
    contentBase: path.resolve(__dirname, './')  // New
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
