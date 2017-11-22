import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

import Root from 'core/root';
import configureStore from 'core/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);
  window.s = store;
});