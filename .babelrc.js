// Jest needs this file to transpile code for testing

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
};
