const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = merge(
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo'
      })
    ],
  },
  parts.lintCSS(PATHS.app),
  parts.lintJavaScript(PATHS.app)
);

module.exports = function(env) {
  if (env == 'production') {
    return merge(
      common,
      {
        performance: {
          hints: 'warning', // error or false are valid too
          maxEntrypointSize: 100000, // in bytes
          maxAssetSize: 50000, // in bytes
        }
      },
      {
        output: {
          // Tweak this to match your GitHub project name
          publicPath: '/webpack-demo/'
        }
      },
      parts.loadJavaScript(PATHS.app),
      parts.extractBundles([
        {
          name: 'vendor',
          entries: ['react']
        }
      ]),
      parts.clean(PATHS.build),
      parts.minifyJavaScript({ useSourceMap: true }),
      parts.minifyCSS({
        options: {
          discardComments: {
            removeAll: true,
          },
        },
      }),
      parts.attachRevision(),
      parts.generateSourcemaps('source-map'),
      parts.extractCSS(),
      parts.purifyCSS(),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      )
    );
  }
  return merge(
    common,
    {
      // Disable performance hits during development
      performance: {
        hints: false
      },
      plugins: [
        new webpack.NamedModulesPlugin()
      ]
    },
    parts.generateSourcemaps('eval-source-map'),
    parts.loadCSS(),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    })
  );
};
