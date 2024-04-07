const path = require('path');

module.exports = {
  entry: {
    app: './js/jquery.crossword.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/jquery.crossword.js',
  },
};
