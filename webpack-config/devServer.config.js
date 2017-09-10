const dirVars = require('./base/dir-vars.config.js')

module.exports = {
  historyApiFallback: true,
  hot: true,
  inline: true,
  contentBase: dirVars.publicDir,
  port: 8080,
  stats: { colors: true }
}
