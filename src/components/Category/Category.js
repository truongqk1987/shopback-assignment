/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback } from 'react';
import injectSheet from 'react-jss';

import { getSVGUrl } from 'utils';

import stylesheet from './stylesheet';

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