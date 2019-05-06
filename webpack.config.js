const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")

process.traceDeprecation = true

/**
 * This configuration was hand-written with the help of a few different articles
 * - (scss) https://florianbrinkmann.com/en/4240/sass-webpack/
 */

module.exports = {
  entry: {
    app: ["./index.js", "./app.scss"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "web/js")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css",
              outputPath: "../css/"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: [
              "vue-style-loader",
              {
                loader: "css-loader"
              }
            ],
            js: ["babel-loader"]
          },
          cacheBusting: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  performance: {
    hints: false
  },
  plugins: [new VueLoaderPlugin()]
}
