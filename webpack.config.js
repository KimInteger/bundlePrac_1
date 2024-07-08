const path = require('path');

module.exports = {
  entry : './src/app.ts',
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'bundle.js'
  },
  mode : 'development',
  module : {
    rules : [
      {
        test : /\.ts$/,
        use : 'babel-loader',
        exclude : /node_modules/
      }
    ]
  },
  resolve : {
    extensions : ['.ts','.js']
  }
}