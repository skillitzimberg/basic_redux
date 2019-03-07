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