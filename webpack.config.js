const Path = require('path');

module.exports = {
  entry: {
    cleric: './src/cleric.ts',
    ranger: './src/ranger.ts',
    rogue: './src/rogue.ts',
    warrior: './src/warrior.ts',
    wizard: './src/wizard.ts',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: Path.resolve(__dirname, 'dist'),
    library: "bots",
    libraryTarget: "window"
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: false,
    inline: false,
    liveReload: false
  }
}
