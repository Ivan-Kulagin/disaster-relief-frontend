const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/disaster-relief-frontend/" : "/",
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
