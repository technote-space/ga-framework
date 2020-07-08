module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-flow',
    '@babel/preset-react',
    '@babel/typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-react-inline-elements',
    'react-html-attrs',
    'transform-class-properties',
  ],
  ignore: ['node_modules', 'dist'],
};
