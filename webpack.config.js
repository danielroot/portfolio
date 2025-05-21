const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  plugins: [
      /**
       * All files inside webpack's output.path directory will be removed once, but the
       * directory itself will not be. If using webpack 4+'s default configuration,
       * everything under <PROJECT_DIR>/dist/ will be removed.
       * Use cleanOnceBeforeBuildPatterns to override this behavior.
       *
       * During rebuilds, all webpack assets that are not used anymore
       * will be removed automatically.
       *
       * See `Options and Defaults` for information
       */
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        filename: "index.html"
      })
  ],
  context: __dirname,
  devtool: "source-map",
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

      // Babel JS
      {
        include: path.resolve(__dirname, "./src"),
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          plugins: ['react-hot-loader/babel']
        }
      },

      // inline SVG
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.jsx?$/
        },
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false
            }
          }
        ]
      },

      // SVG in Sass
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.scss?$/
        },
        loader: 'url-loader'
      },

      // CSS
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },

      // Imgs
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          }

        ]
      },

      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },

      // PDFs
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      }
    ]
  }
};
