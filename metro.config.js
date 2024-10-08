/**
 * Metro configuration for React Native
 * https://facebook.github.io/metro/docs/configuration
 *
 * @format
 */
// Import the getDefaultConfig from expo/metro-config
const { getDefaultConfig } = require('expo/metro-config');
module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  const { transformer, resolver } = config;
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  };
  return config;
})();