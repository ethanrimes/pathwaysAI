/**
 * Metro configuration for React Native
 * https://facebook.github.io/metro/docs/configuration
 *
 * @format
 */

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: ['txt', 'json', 'png', 'jpg', 'jpeg', 'svg'],
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'svg'],
  },
};
