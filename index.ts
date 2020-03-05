/**
 * Environment variables
 */
const {} = process.env

/**
 * Initialise all the things
 * 
 * @param {Object} params
 * The params passed by the command
 */
const init = async (params: any) => {
  const { mode = 'dev' } = params || {}
  const webpackConfig = require('./webpack.config.js')(mode)
  runWebpack(webpackConfig)
}

/**
 * Run webpack.
 *
 * @param {Object} config
 * Webpack config
 */
const runWebpack = async (config: any) => {
  const webpack = require('webpack')

  webpack(config, async (err: any, stats: any) => {
    if (err) throw err

    console.log(
      stats.toString({
        chunks: false,
        colors: true
      })
    )

    if (stats.hasWarnings()) console.warn(stats.warnings)
    if (stats.hasErrors()) console.error(stats.errors)
  })

  return '' // Stop make-runnable printing 'undefined'
}

export { init }
require('make-runnable/custom')({ printOutputFrame: false })
