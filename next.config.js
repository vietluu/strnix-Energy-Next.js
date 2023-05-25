/** @type {import('next').NextConfig} */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const nextConfig = {
  swcMinify: true,
  // compiler: {
  //   removeConsole: true,
  // },
  output: 'standalone',
  experimental: {
    appDir: true,
    mdxRs: true,
  // turbo: {
  //         resolveAlias: {
  //             underscore: 'lodash',
  //             mocha: { browser: 'mocha/browser-entry.js' },
  //           },
  //         loaders: {
  //           // Option format
  //           '.md': [
  //             {
  //               loader: '@mdx-js/loader',
  //               options: {
  //                 format: 'md',
  //               },
  //             },
  //           ],
  //           // Option-less format
  //           '.mdx': ['@mdx-js/loader'],
  //         },
  //       },
  },
 
  poweredByHeader: false,
  reactStrictMode: true,
webpack: (config, {dev,isServer}) => {
  config.resolve.alias['@'] = path.resolve(__dirname, './src');

    if (!dev) {
      // polyfill IE11
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./assets/polyfills.js')
        ) {
          entries['main.js'].unshift('./assets/polyfills.js');
        }
        return entries;
      }
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 6,
              warnings: false,
              output: {
                comments: false
              },
              compress: {
                drop_console: true // remove console
              },
              ie8: false
            }
          }),
          new CssMinimizerPlugin({
            parallel: true,
            minify: [
              CssMinimizerPlugin.cssnanoMinify,
              CssMinimizerPlugin.cleanCssMinify
            ],
          }),
        ],
      }
      config.module.rules.push({
        test: /\.tsx$/,
        include: path.resolve(__dirname, './src'),
        options: {
          workerParallelJobs: 50,
          // additional node.js arguments
          workerNodeArgs: ['--max-old-space-size=2048'],
        },
        loader: 'thread-loader'
      });
      config.devtool = isServer ? false : 'source-map';
    } else {
      config.plugins.push(  new ESLintWebpackPlugin({
        
        context: path.resolve(__dirname, 'src'),
        emitError: true,
        emitWarning: true,
        failOnError: true,
        failOnWarning: true,
        quiet: false,
        extensions: [`tsx`],
        exclude: [`node_modules`],

    }))
  
      //   test: /\.tsx$/,
      //   enforce: 'pre',
      //   include: path.resolve(__dirname, './src'),
      //   options: {
      //     configFile: path.resolve('.eslintrc.json'),
      //     eslint: {
      //       configFile: path.resolve(__dirname, '.eslintrc.json')
      //     }
      //   },
      //   loader: 'eslint-webpack-plugin'
      // });
    }
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg)$/i, 
      use: [
        {
          loader: `img-optimize-loader`,
          options: {
            compress: {
              // This will transform your png/jpg into webp.
              webp: true,
              disableOnDevelopment: true,
              publicPath: '/assets/images',
             
            }
          },
        },
      ],
    });
      return config;
},
serverRuntimeConfig: { // Will only be available on the server side
  rootDir: path.join(__dirname, './'),
  PORT: isDev ? 3000 : (process.env.PORT || 8688)
},
publicRuntimeConfig: { // Will be available on both server and client
  staticFolder: '/public',
  isDev, // Pass through env variables
},
 
}
module.exports = withBundleAnalyzer(nextConfig)




