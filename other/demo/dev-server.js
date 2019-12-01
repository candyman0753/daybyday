const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config')
const options = {
  contentBase: '/src',
  hot: true,
  host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(3000, 'localhost', () => {
  console.log('dev running on port 3000')
})