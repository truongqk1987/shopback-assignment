/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import injectSheet from 'react-jss';

import {
  CategoryList,
  StoreList
} from './components';

const stylsheet = {
  App: {

  }
}

const App = (props) => {

  return <>
    <CategoryList />
    <StoreList />
  </>
}

export default injectSheet(stylsheet)(App);
