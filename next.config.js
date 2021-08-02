const webpack = require('webpack')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
  },
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        M: 'materialize-css'
      })
    )

    return config
  }
}
