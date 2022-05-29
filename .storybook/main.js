const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    const alias = {
      '@': path.resolve(__dirname, '../src'),
      // TODO: TEST
      '@components': path.resolve(__dirname, '../src/components'),
      '@hooks': path.resolsve(__dirname, '../src/hooks'),
      '@contexts': path.resolve(__dirname, '../src/contexts'),
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };
    return config;
  },
};
