// .storybook/main.js

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-backgrounds",
    "@storybook/addon-controls",
    "@storybook/addon-essentials",
  ],
};
