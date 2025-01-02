const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'fui-buttons.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development', // Change to 'production' for production build
};
