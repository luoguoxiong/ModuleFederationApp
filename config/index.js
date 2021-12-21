const NODE_ENV = process.env.NODE_ENV || 'dev';

const config = require(`./${NODE_ENV}`);

module.exports = config;
