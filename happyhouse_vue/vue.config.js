const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   proxy: {
  //     "/wid": {
  //       target: "http://www.kma.go.kr",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
