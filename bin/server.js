
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');

const config = JSON.parse(process.argv[2]);
const serverName = process.argv[3];

const runServer = async() => {
  const devServerCofnig = require(path.join(__dirname, `../${config.path}/webpack.config.js`));
  const compiler = Webpack(devServerCofnig);
  const devServerOptions = { ...devServerCofnig.devServer, open: true };
  const server = new WebpackDevServer(devServerOptions, compiler);
  console.log(`Starting ${serverName} ...`);
  await server.start();
};

runServer();

