import React from 'react';
import { Category } from 'components'
import injectSheet from 'react-jss';

import stylesheet from './stylesheet';

export const CategoryList = ({ categories = [], onChange, classes, activeCategory }) => {
    const sortedCategories = categories.sort((x, y) => x.id === activeCategory.id ? -1 : y.id === activeCategory.id ? 1 : 0);
    return <ul className={classes.CategoryList}>
        {
            sortedCategories.map(category => <Category activeCategory={activeCategory} onCategoryClick={onChange} key={category.id} {...category} />)
        }
    </ul>
}

export default injectSheet(stylesheet)(CategoryList);