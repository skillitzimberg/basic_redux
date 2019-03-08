I am attempting to define a series of steps that I can use to both understand Redux fundamentals and generally follow when creating React/Redux applications.  


I want to start from a blank page. This includes all the installations and directory/file creation I use in the order in which they seem to be necessary.  


## Instantiate project fundamentals
mkdir basic_redux  
cd basic_redux/  
git init  
touch README.md  

## Environment set up
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
npm install jest  
npm install babel-jest  
touch webpack.config.js

### Redux installation
npm install redux  
npm install react-redux  

## Webpack: webpack.config.js

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

## Directory set up
mkdir src __tests__  
mkdir src/components src/actions src/reducers src/constants src/middleware  
touch src/index.jsx  
git remote add . . .  
touch src/components/App.jsx  
touch template.ejs  


#### SRC/INDEX.JSX  
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const App = () => (
  <Statement />
);

  ReactDOM.render(
      <App/>,
    document.getElementById('react-app-root')
  );
```

#### SRC/COMPONENTS/APP.JSX 
```
import React from 'react';
import Statement from './Statement';

function App() {
  return (
    <Statement />
  );
}

export default App;
```

#### SRC/COMPONENTS/STATEMENT.JSX
Because Statement is going to be using the Redux store directly it must be a class component.

import React from 'react';

class Statement extends React.Component {
  render() {
    return (
      <div>
          <h1>I'm alive</h1>
      </div>
    );
  }
}

export default Statement;

#### BASIC_REDUX/TEMPLATE.EJS  
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

## SET UP ENVIRONMENT  
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

### STEPS TO ADD REDUX
* Determine the state the component needs.  
* Import connect() into the component.  
* Map state to component props (mapStateToProps).  
* Connect the component to the store.    
* Create the Redux store.  
* Provide the store to the application <Provider>.  
* Create the reducer.  
* Wire up actions.  

### Determine the state the component needs
All I want to do at this stage is make the text that is shown when the page loads come from state. Right now it says, "I'm alive." So the state would be something like:
```  
{
  statement: 'I'm alive'
}  
```

### Import connect() into the component.
** In SRC/STATEMENT.JSX **  
Import connect to the component  
```
import { connect } from 'react-redux'
```

### Map state to component props (mapStateToProps). 
```
const mapStateToProps = (state) => ({
  statement: state.statement
});
```

### Connect the component to the store  
```
export default connect(mapStateToProps)(App);
```

### Create the Redux store.
** In SRC/INDEX.JSX ** 
```
import { createStore } from 'redux';
```

```
const store = createStore();
```

### Provide the store to the application <Provider>.
** In SRC/INDEX.JSX ** 
```
import { Provider } from 'react-redux';
```

And replace current const render . . . with:
```
const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('react-app-root')
  );
};
```

### Define an action type
The thought process I'm currently working with is that an action type should reflect what I am trying to accomplish. In this case I am anticipating being able to change the displayed statement.  

** In SRC/CONSTANTS/ACTIONTYPES.JS **
```
export const CHANGE_STATEMENT = 'CHANGE_STATEMENT';
```

### Create the reducer. 
** In SRC/REDUCERS/INDEX.JS **
```
function statementReducer() {
  return {
    statement: 'I'm alive!'
  }
}
```