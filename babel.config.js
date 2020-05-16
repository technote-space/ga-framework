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
    'react-hot-loader/babel',
    'transform-class-properties',
    [
      'i18next-extract', {
        locales: ['ja', 'en'],
        outputPath: './src/locales/{{locale}}.json',
      },
    ],
  ],
  ignore: ['node_modules', 'build', 'distDev', 'distProd'],
};
