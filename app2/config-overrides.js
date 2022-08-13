const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.output = {
    ...config.output,
    publicPath: "auto"
  }
  config.plugins = [
    ...config.plugins,
    new ModuleFederationPlugin({
      name: "app2",
      filename: "moduleEntry.js",
      exposes: {
        "./Footer": "./src/Footer"
      },
      remotes: {
        hostapp: `hostapp@http://localhost:3000/moduleEntry.js`,
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react-dom"],
        },
        "semantic-ui-react": {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["semantic-ui-react-dom"],
        }
      },
    }),
  ]
  console.log(config);
  return config;
}