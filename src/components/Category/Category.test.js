import React from 'react';
import { shallow } from 'enzyme';
import { Category } from './Category';
import stylesheet from './stylesheet';

describe('category component', () => {
    it('should render correctly', () => {
        const onCategoryClick = jest.fn();
        const props = {
            activeCategory: 1,
            id: 2,
            name: 'dining',
            shortname: 'burger',
            onCategoryClick,
            classes: stylesheet
        }
        const wrapper = shallow(<Category {...props} />);
        const liComponent = wrapper.find('li');
        liComponent.simulate('click');

        expect(onCategoryClick).toHaveBeenCalledTimes(1); 
        expect(wrapper).toMatchSnapshot();
    })
})