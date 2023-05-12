/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    turbo: {
            resolveAlias: {
                underscore: 'lodash',
                mocha: { browser: 'mocha/browser-entry.js' },
              },
            loaders: {
              // Option format
              '.md': [
                {
                  loader: '@mdx-js/loader',
                  options: {
                    format: 'md',
                  },
                },
              ],
              // Option-less format
              '.mdx': ['@mdx-js/loader'],
            },
          },
    },
   
    poweredByHeader: false,
    reactStrictMode: true,
    poweredByHeader: false,
    webpack: (config, options) => {
        config.module.rules.push({
          test: /\.mdx/,
          use: [
            options.defaultLoaders.babel,
            {
              loader: '@mdx-js/loader',
              // options: pluginOptions.options,
            },
          ],
        });
        return config;
    },
   
}

module.exports = nextConfig
