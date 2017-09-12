var webpack = require('webpack');

module.exports = {
  entry: './src/js/index.tsx',
  output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
        {
            enforce: 'pre',
            test: /\.tsx?$/, 
            loader: 'tslint-loader',
            exclude: /(node_modules)/,
        },
        { 
            test: /\.tsx?$/, 
            loader: 'awesome-typescript-loader'
        }
    ],    
    loaders: [
       { test: /\.tsx?$/, loader: [
         'react-hot-loader', 
         'awesome-typescript-loader'
        ]},
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {   
            warnings: false 
        }
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
  ]
};
