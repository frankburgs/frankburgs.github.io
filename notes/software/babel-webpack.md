# Setup from repo
``` js
$ git clone repoName
$ npm i
$ npm run build
$ node server
```

# Setup from 'scratch'
``` css
$ npm i react react-dom @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli
```

# Package
``` json
{
  "scripts": {
    "build": "webpack",
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.26.4",
    "@babel/core": "^7.26.9",
    "@babel/preset-env": "^7.26.9",
    "@babel/preset-react": "^7.26.3",
    "babel-loader": "^8.4.1",
    "webpack": "^5.98.0",
    "webpack-cli": "^6.0.1"
  }
}
```

``` json
{
    "scripts": {
    "build": "webpack"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.27.0",
    "@babel/core": "^7.26.10",
    "@babel/preset-env": "^7.26.9",
    "@babel/preset-react": "^7.26.3",
    "babel-loader": "^10.0.0",
    "webpack": "^5.99.5",
    "webpack-cli": "^6.0.1"
  }
}
```

# Create webpack.config.js in root directory.
``` js 
const path = require('path');

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

```
