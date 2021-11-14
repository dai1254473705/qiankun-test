const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = {
  devtool: "source-map",
  entry: paths.appIndexJs,
  mode: "development",
  output: {
    publicPath: paths.publicUrlOrPath,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    open: true,
    port: "7099",
    hot: true,
    liveReload: false,
    compress: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    client: {
      logging: "warn",
      overlay: { warnings: false, errors: true },
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|js?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
