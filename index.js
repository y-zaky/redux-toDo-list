import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'

//main app
import App from './containers/App';
import store from './store'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))