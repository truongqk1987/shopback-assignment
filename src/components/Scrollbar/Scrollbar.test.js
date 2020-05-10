import React from 'react';
import { mount } from 'enzyme';
import { Scrollbar } from './Scrollbar';
import stylesheet from './stylesheet';

describe('category list component', () => {
    it('should render correctly', () => {
        const props = {
            classes: stylesheet,
            children: <div>children</div>,
            id: 'test-scrollbar'
        }
        const wrapper = mount(<Scrollbar {...props} />);
        expect(wrapper.contains(<div>children</div>)).toEqual(true) 
    })
})