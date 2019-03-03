module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    'transform-class-properties',
  ],
  ignore: [
    /node_modules\//g,
  ],
};
