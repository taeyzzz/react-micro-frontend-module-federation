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
      name: "hostapp",
      filename: "moduleEntry.js",
      exposes: {
        "./Header": "./src/Header"
      },
      remotes: {
        app2: `app2@http://localhost:3003/moduleEntry.js`,
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