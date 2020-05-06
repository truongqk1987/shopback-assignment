import React, { useCallback, useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';

import { loadShopbackData } from 'actions/ShopbackActionCreator';
import { categoriesSelector, storesSelector } from 'reducers/shopbackReducer'

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

  const categories = useSelector(categoriesSelector)
  const stores = useSelector(storesSelector)

  const onCategoryChanged = useCallback((category) => {
    setCategory(Object.assign({}, category));
  }, [])

  useEffect(() => {
    dispatch(loadShopbackData());
  }, [dispatch])

  return <>
    <CategoryList onChange={onCategoryChanged} categories={categories} />
    <StoreList category={category} stores={stores} />
  </>
}

export default injectSheet(stylsheet)(AppContainer);
