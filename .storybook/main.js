const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config) => {
    /* config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "../src/components"
    );
    config.resolve.alias["@images"] = path.resolve(
      __dirname,
      "../src/assets/images"
    );
    config.resolve.extensions.push(".ts", ".tsx");
    return config; */
    config.resolve.alias={
      ...config.resolve.alias,
      "@components":path.resolve(
        __dirname,
        "../src/components"
      ),
      "@images":path.resolve(
        __dirname,
        "../src/assets/images"
      )
    }
    config.resolve.extensions.push(".ts", ".tsx");
    return config; 
  },
};
