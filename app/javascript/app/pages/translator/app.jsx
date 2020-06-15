import React from "react";
import { Provider } from 'react-redux'
import store from './store';

import SrcTextarea from './app/src-textarea';
import DstTextarea from './app/dst-textarea';

export default () => {
  return (<Provider store={store}>
    <SrcTextarea />
    <DstTextarea />
  </Provider>);
};
