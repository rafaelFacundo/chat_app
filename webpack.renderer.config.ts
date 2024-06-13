import type { Configuration } from "webpack";
import webpack from "webpack";
import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";
import "dotenv/config";

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});
rules.push({
  test: /\.(png|jpg|jpeg|gif)$/i,
  type: "asset/resource",
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      teste: process.env.TESTE,
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".png"],
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      vm: require.resolve("vm-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
};
