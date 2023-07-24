import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux"

import TagManager from 'react-gtm-module'
import { store } from './StateManagement/Store';

const tagManagerArgs = {
  gtmId: 'GTM-T2W84HQ'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>
);


