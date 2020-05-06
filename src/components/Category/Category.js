import React from 'react';

const Category = ({ name, iconUrl}) => <div>
    <div><img src={iconUrl} alt={name} /></div>
    <div>{name}</div>
</div>

export default Category;