const custom = require('./webpack.config.js');

module.exports = {
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};
