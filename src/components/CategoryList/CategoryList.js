import React from 'react';
import { Category } from 'components'

const CategoryList = ({ categories = [], onChange }) => <div>
    {
        categories.map(category => <Category key={category.id} {...category} />)
    }
</div>

export default CategoryList;