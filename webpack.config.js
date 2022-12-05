const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {

  devServer: {
    host: '192.168.100.5',//your ip address
    port: 8080,
    disableHostCheck: true,
  },
  devtool: 'eval-source-map',
  entry: {
    'index': './src/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        use: [
          (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
              esModule: false,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              // mozjpeg: {
              //   progressive: true,
              //   quality: 95
              // },
              // optipng: {
              //   optimizationLevel: 4,
              // },
              // pngquant: {
              //   quality: [0.90, 0.90],
              //   speed: 4
              // },
              // gifsicle: {
              //   interlaced: false,
              // },
              // webp: {
              //   quality: 90
              // }
            }
          }
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
        // options: {
        //   outputPath: './fonts',
        //   publicPath: '../fonts'
        // }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
      // filename: './styles/[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['index'],
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin(
      [
        { from: path.resolve(__dirname, 'src/js/vendor'), to: path.resolve(__dirname, 'dist/js/vendor') },
        { from: path.resolve(__dirname, 'src/js/data'), to: path.resolve(__dirname, 'dist/data') },
        { from: path.resolve(__dirname, 'src/images/about'), to: path.resolve(__dirname, 'dist/images') },
        { from: path.resolve(__dirname, 'src/hosting/'), to: path.resolve(__dirname, 'dist/') },
      ]
    ),
    new WebpackMd5Hash()
  ]
};