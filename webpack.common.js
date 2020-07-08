const webpack           = require('webpack');
const path              = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const NODE_ENV          = process.env.NODE_ENV;
const PROJECT_ROOT      = path.resolve(__dirname, '../../..');
const OUTPUT_DIR        = path.resolve(PROJECT_ROOT, 'build');

module.exports = {
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/public/index.html'),
      hash: NODE_ENV !== 'none',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
    new copyWebpackPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'src/assets/images'), to: path.resolve(OUTPUT_DIR, 'images')},
      ],
    }),
  ],
  mode: NODE_ENV,
  performance: {
    hints: false,
    maxEntrypointSize: 5000000,
    maxAssetSize: 5000000,
  },
  stats: {
    colors: true,
  },
  entry: {
    index: path.resolve(PROJECT_ROOT, 'src/index'),
    algorithm: path.resolve(PROJECT_ROOT, 'src/GeneticAlgorithm'),
    'worker-controller.worker': '@technote-space/worker-controller/dist/Worker/worker-controller.worker',
    process: path.resolve(__dirname, 'dist/app/logic/Process/Process'),
  },
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js',
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: require('./babel.config'),
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(|gif|jpeg|jpg|png|svg|txt)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
