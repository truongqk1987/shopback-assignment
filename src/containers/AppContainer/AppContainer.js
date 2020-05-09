import React, { useCallback, useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash.isempty';

import { loadShopbackData } from 'actions/ShopbackActionCreator';
import { categoriesSelector, storesSelector } from 'reducers/shopbackReducer'

import stylesheet from './stylesheet';

import {
  CategoryList,
  StoreList,
  Scrollbar,
  ShowAllStoresButton
} from 'components';

const AppContainer = ({ classes }) => {
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

  const categories = useSelector(categoriesSelector) || [];
  const stores = useSelector(storesSelector) || [];

  const onCategoryChanged = useCallback((category) => {
    setCategory({...category});
  }, [])

  useEffect(() => {
    dispatch(loadShopbackData());
  }, [dispatch])

  if (isEmpty(categories)) return null;

  return <div className={classes.App}>
    <Scrollbar>
      <CategoryList onChange={onCategoryChanged} categories={categories} activeCategory={category || categories[0]}/>
    </Scrollbar>
    <StoreList category={category || categories[0]} stores={stores} />
    <ShowAllStoresButton/>
  </div>
}

export default injectSheet(stylesheet)(AppContainer);
