const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: process.env.VUE_APP_SERVER_URL
  },
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
    },
  }
});
