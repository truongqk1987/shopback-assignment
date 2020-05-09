/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback } from 'react';
import injectSheet from 'react-jss';

import stylesheet from './stylesheet';

const CATEGORY_ICON_MAP = {
    popular: 'fire',
    dining: 'burger',
    travel: 'plane',
    electronics: 'laptop',
    fashion: 'tshirt',
    groceries: 'lettuce',
    'health-beauty': 'lipstick',
    'home-living': 'couch',
    'sports-outdoors': 'basketball'
}

const getSVGUrl = (categoryShortName) => {
    return `https://cloud.shopback.com/raw/upload/static/images/icon/core/${CATEGORY_ICON_MAP[categoryShortName]}.svg`
}

const Category = ({ activeCategory, id, name, shortname = 'popular', onCategoryClick, classes }) => {
    const onClick = useCallback(() => {
        onCategoryClick({ id });
    }, [id, onCategoryClick])

    const isActive = activeCategory.id === id && 'isActive';

    return (
        <li onClick={onClick} className={`${classes.Category} ${isActive}`}>
            <img src={getSVGUrl(shortname)} type="svg" />
            <span>{name}</span>
        </li>
    )
}

export default injectSheet(stylesheet)(Category);