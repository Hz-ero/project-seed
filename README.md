a basic project for node-react-redux-webpack

## npm scripts
```
"scripts": {
    "start": "node server",
    "dev": "webpack-dev-server --devtool eval --progress --config webpack.dev.config.js ",
    "dll": "webpack --progress --colors --config webpack.dll.config.js -p",
    "build": "NODE_ENV=production webpack",
    "server": "gulp server"
  }
```