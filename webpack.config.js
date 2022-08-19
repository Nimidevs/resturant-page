const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    menu: './src/menu.js',
    mainhome: './src/mainhome.js',
    contact: './src/contact.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};