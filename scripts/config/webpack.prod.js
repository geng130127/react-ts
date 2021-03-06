const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js')
const paths = require('../paths')
const { shouldOpenAnalyzer, ANALYZER_HOST, ANALYZER_PORT } = require('../conf')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  target: 'browserslist',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: paths.appBuild,
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    shouldOpenAnalyzer &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: ANALYZER_HOST,
        analyzerPort: ANALYZER_PORT,
      }),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true, // 多线程
        terserOptions: {
          compress: {
            drop_console: true,
            pure_funcs: ['console.log'],
          },
        },
      }),
      new CssMinimizerPlugin(),
      new CompressionWebpackPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 5120, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
})
