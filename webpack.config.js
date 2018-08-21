const path = require("path");

module.exports = {
  context: __dirname,
  //entry: "./src/index.js",
  devtool: "source-map",
  // output: {
  //   path: path.resolve(__dirname, "./public"),
  //   filename: "bundle.js"
  //},
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    port: 3000,
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
        include: path.resolve(__dirname, "./src"),
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
        // use: [
        //   {
        //     loader: "style-loader"
        //   },
        //   {
        //     loader: "css-loader",
        //     options: {
        //       sourceMap: true
        //     }
        //   },
        //   {
        //     loader: "sass-loader",
        //     options: {
        //       sourceMap: true
        //     }
        //   }
        // ]
      }
    ]
  }
};
