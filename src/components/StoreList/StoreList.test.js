import React from 'react';
import { shallow } from 'enzyme';
import { StoreList } from './StoreList';
import stylesheet from './stylesheet';

describe('category list component', () => {
    it('should render correctly', () => {
        const props = {
            classes: stylesheet,
            stores: [{
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
            }],
            category: {
                "id": 0,
                "name": "Popular",
                "href": "/all-stores",
                "iconUrl": "https://cloud.shopback.com/raw/upload/static/images/icon/core/fire.svg"
            }
        }
        const wrapper = shallow(<StoreList {...props} />);
        expect(wrapper).toMatchSnapshot(); 
    })
})