const webpack = require('webpack')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
  },
  typescript: {
    // materialize-react has some incomplete types
    ignoreBuildErrors: true,
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
