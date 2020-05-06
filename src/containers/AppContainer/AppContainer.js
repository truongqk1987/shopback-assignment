import React, { useCallback, useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import { useDispatch } from 'react-redux';

import { loadShopbackData } from 'actions/ShopbackActionCreator';

import {
  CategoryList,
  StoreList
} from 'components';

const stylsheet = {
  App: {

  }
}

const AppContainer = (props) => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const onCategoryChanged = useCallback((category) => {
    setCategory(Object.assign({}, category));
  }, [])

  useEffect(() => {
    dispatch(loadShopbackData());
  }, [dispatch])

  return <>
    <CategoryList onChange={onCategoryChanged} />
    <StoreList category={category} />
  </>
}

export default injectSheet(stylsheet)(AppContainer);
