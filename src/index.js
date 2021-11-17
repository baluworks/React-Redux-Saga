import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import configureStore from './store/storeconfig';

const storeRedux = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


