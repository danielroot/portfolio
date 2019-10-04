let path = require("path");

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
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.jsx?$/
        },
        use: ['babel-loader', '@svgr/webpack']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.scss?$/
        },
        loader: 'url-loader'
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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   name: "[name].[ext]",
            //   outputPath: "assets/"
            // }
          }

        ]
      },
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
      }
      // SVG in JSX
      // {
      //   test: /\.svg$/,
      //   //issuer: /\.jsx?$/,
      //   use: [
      //     {
      //       loader: "babel-loader"
      //     },
      //     {
      //       loader: "react-svg-loader",
      //       options: {
      //         jsx: true // true outputs JSX tags
      //       }
      //     }
      //   ]
      // }
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack']
      // }
      // {
      //   test: /\.svg$/,
      //   issuer: {
      //     test: /\.jsx?$/
      //   },
      //   use: ['@svgr/webpack']
      // },
      // {
      //   test: /\.svg$/,
      //   issuer: {
      //     test: /\.scss?$/
      //   },
      //   use: ['@svgr/webpack', 'file-loader']
      // }

    ]
  }
};
