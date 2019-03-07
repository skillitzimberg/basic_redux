### Instantiate project fundamentals
mkdir basic_redux  
cd basic_redux/  
git init  
touch README.md  

### Environment set up
npm install webpack -g  
npm install webpack-cli  
npm install webpack --save-dev  
npm install webpack-dev-server --save-dev  
npm install html-webpack-plugin --save-dev  
npm install react  
npm install react-dom  
npm install prop-types  
npm install react-hot-loader --save-dev  
npm install babel-core --save-dev  
npm install --save-dev @babel/core  
npm install --save-dev @babel/preset-env  
touch webpack.config.js

```
{
  "name": "basic_redux",
  "version": "1.0.0",
  "description": "A Redux app, step by step.",
  "main": "index.jsx",
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server --config webpack.config.js --open",
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/skillitzimberg/basic_redux.git"
  },
  "author": "Scott Bergler",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/skillitzimberg/basic_redux/issues"
  },
  "homepage": "https://github.com/skillitzimberg/basic_redux#readme",
  "dependencies": {
    "prop-types": "^15.7.2",
    "react": "^16.8.4",
    "react-dom": "^16.8.4"
  },
  "devDependencies": {
    "@babel/core": "^7.3.4",
    "@babel/preset-env": "^7.3.4",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "html-webpack-plugin": "^3.2.0",
    "react-hot-loader": "^4.8.0",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.2.1"
  }
}
```

### Directory set up
mkdir src __tests__  
mkdir src/components src/actions src/reducers src/constants src/middleware  
touch src/index.jsx  
git remote add . . .  
touch src/components/App.jsx  
touch template.ejs  


SRC/INDEX.JSX  
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const render = (App) => {
  ReactDOM.render(
      <App/>,
    document.getElementById('react-app-root')
  );
};

render(App);
```

SRC/COMPONENTS/APP.JSX  
```
import React from 'react';

function App() {
  return(
    <div>
      <h1>I'm alive</h1>
    </div>
  )
}
```

BASIC_REDUX/TEMPLATE.EJS  
```
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
  <body>
    <% if (htmlWebpackPlugin.options.appMountId) { %>
      <div id="<%= htmlWebpackPlugin.options.appMountId%>"></div>
    <% } %>
  </body>
</html>
```

SET UP ENVIRONMENT  
npm init  

```
package name: (basic_redux) 
version: (1.0.0) 
description: A Redux app, step by step.
entry point: (index.js) index.jsx
test command: jest
git repository: https://github.com/skillitzimberg/basic_redux
keywords: 
author: Scott Bergler
license: (ISC) MIT
About to write to /Users/ForeignFood/Development/basic_redux/package.json:

{
  "name": "basic_redux",
  "version": "1.0.0",
  "description": "A Redux app, step by step.",
  "main": "index.jsx",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/skillitzimberg/basic_redux.git"
  },
  "author": "Scott Bergler",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/skillitzimberg/basic_redux/issues"
  },
  "homepage": "https://github.com/skillitzimberg/basic_redux#readme"
}


Is this OK? (yes)
```



