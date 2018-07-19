const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    port: 9000,
    historyApiFallback: true
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".json", ".jsx"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        include: path.resolve(__dirname, "./src"),
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
