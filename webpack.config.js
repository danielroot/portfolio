const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
  ],
  context: __dirname,
  devtool: "source-map",
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".json", ".jsx"],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
        },
      },
      // Babel JS
      {
        test: /\.(js|jsx|mjs)$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/react-medium-image-zoom"),
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "react-hot-loader/babel",
              "@babel/plugin-proposal-optional-chaining",
            ],
          },
        },
      },

      // inline SVG
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.jsx?$/,
        },
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "@svgr/webpack",
            options: {
              svgo: false,
            },
          },
        ],
      },

      // SVG in Sass
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.scss?$/,
        },
        loader: "url-loader",
      },

      // SCSS
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // processes CSS with PostCSS plugins
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // processes CSS with PostCSS plugins
        ],
      },

      // Imgs
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },

      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },

      // PDFs
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
