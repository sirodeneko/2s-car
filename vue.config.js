module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "//cdn-bdas.xiaosiro.cn/" : "/",
  devServer: {
    proxy: {
      "^/car": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
      },
      "^/api": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
