mkdir basic_redux  
cd basic_redux/  
git init  
touch README.md  
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

npm install react  
npm install react-dom  
npm install webpack --save-dev  
npm install webpack-dev-server --save-dev  
npm install react-hot-loader --save-dev  
npm install html-webpack-plugin --save-dev  
npm install babel-core --save-dev  
npm install babel-loader --save-dev  
npm install babel-preset-es2015 --save-dev  
npm install babel-preset-react --save-dev  
npm install prop-types  