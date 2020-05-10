import React from 'react';
import { shallow } from 'enzyme';
import { Store } from './Store';
import stylesheet from './stylesheet';

describe('category list component', () => {
    it('should render correctly', () => {
        const props = {
            classes: stylesheet,
            "categoryId": 0,
            "alt": "Qoo10 Coupons & Promo Codes",
            "displayText": "Up to 2.0% Cashback",
            "id": 917,
            "isSpecialStore": false,
            "logoUrl": "https://static.shopback.com/uploads/ci/143830/logo-qoo10.gif",
            "name": "Qoo10",
            "oldDisplayText": "",
            "oldPreviewText": "",
            "shortname": "/qoo10"
        }
        const wrapper = shallow(<Store {...props} />);
        expect(wrapper).toMatchSnapshot();
    })
})