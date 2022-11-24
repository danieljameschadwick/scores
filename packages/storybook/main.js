const custom = require('./webpack.config.js');

module.exports = {
  stories: ['../**/*.stories.tsx'],
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};
