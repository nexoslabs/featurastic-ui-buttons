const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'fui-buttons.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: "FeaturasticUIButton",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // For transpiling ES6+
        },
      },
    ],
  },
  mode: 'development', // Change to 'production' for production build
};
