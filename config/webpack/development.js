process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const environment = require('./environment');

let config = environment.toWebpackConfig();

//disable LiveReload
config.devServer.hot = false;
config.devServer.inline = false;

module.exports = config;
