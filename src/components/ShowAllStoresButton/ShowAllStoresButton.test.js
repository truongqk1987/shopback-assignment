import React from 'react';
import { shallow } from 'enzyme';
import { ShowAllStoresButton } from './ShowAllStoresButton';
import stylesheet from './stylesheet';

describe('category list component', () => {
    it('should render correctly', () => {
        const props = {
            classes: stylesheet
        }
        const wrapper = shallow(<ShowAllStoresButton {...props} />);
        expect(wrapper).toMatchSnapshot();
    })
})