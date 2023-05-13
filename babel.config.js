module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-reanimated/plugin'],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@constants': './src/constants',
            '@context': './src/context',
            '@data': './src/data',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@storage': './src/storage',
            '@styles': './src/styles',
            '@theme': './src/theme',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
