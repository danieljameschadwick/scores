module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
  ],
  "plugins": [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-modules-commonjs",
    "transform-es2015-modules-commonjs",
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
  ],
};
