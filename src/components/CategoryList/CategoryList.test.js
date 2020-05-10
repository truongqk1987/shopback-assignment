import React from 'react';
import { mount } from 'enzyme';
import { CategoryList } from './CategoryList';
import stylesheet from './stylesheet';

describe('category list component', () => {
    it('should render correctly', () => {
        const onChange = jest.fn();
        const props = {
            classes: stylesheet,
            categories: [{
                "id": 0,
                "name": "Popular",
                "href": "/all-stores",
                "iconUrl": "https://cloud.shopback.com/raw/upload/static/images/icon/core/fire.svg"
            }],
            onChange, 
            activeCategory: 1
        }
        const wrapper = mount(<CategoryList {...props} />);
        wrapper.find('li').simulate('click');

        expect(wrapper.find('li')).toHaveLength(1);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(wrapper.find('span').html()).toEqual('<span>Popular</span>')
    })
})