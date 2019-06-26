module.exports = [{
  entry: './assets/scss/app.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    filename: '../../public/style-bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '../../public/bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader',
          options: {
            includePaths: ["./node_modules"],
            importer: function(url, prev) {
              if(url.indexOf('@material') === 0) {
                var filePath = url.split('@material')[1];
                var nodeModulePath = `./node_modules/@material/${filePath}`;
                return { file: require('path').resolve(nodeModulePath) };
              }
              return { file: url };
            }
          } }
      ]
    }]
  },
}];

module.exports.push({
  entry: ["./assets/js/app.js"],
  output: {
    filename: "../../public/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
},
    {
      entry: ["./assets/js/wc.js"],
      output: {
        filename: "../../public/wc.js"
      },
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader'
        }]
      },
    });
