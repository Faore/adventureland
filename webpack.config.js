const Path = require("path");

module.exports = {
  entry: {
    cleric: "./src/classes/cleric.ts",
    ranger: "./src/classes/ranger.ts",
    rogue: "./src/classes/rogue.ts",
    warrior: "./src/classes/warrior.ts",
    wizard: "./src/classes/wizard.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: Path.resolve(__dirname, "dist"),
    library: "bots",
    libraryTarget: "window",
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: false,
    inline: false,
    liveReload: false,
  },
};
