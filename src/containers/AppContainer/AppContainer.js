import React, { useCallback, useState } from 'react';
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
  const [category, setCategory] = useState("");

  const onCategoryChanged = useCallback((category) => {
    setCategory(Object.assign({}, category));
  }, [])

  return <>
    <CategoryList onChange={onCategoryChanged} />
    <StoreList category={category} />
  </>
}

export default injectSheet(stylsheet)(App);
