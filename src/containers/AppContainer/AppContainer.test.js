import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from "redux-mock-store";

import { AppContainer } from './AppContainer';

describe('category list component', () => {
    beforeAll(() => {  
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // deprecated
                removeListener: jest.fn(), // deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    });

    it('should render correctly', () => {
        const store = configureStore()({
            shopback: {
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
                categories: [{
                    "id": 0,
                    "name": "Popular",
                    "href": "/all-stores",
                    "iconUrl": "https://cloud.shopback.com/raw/upload/static/images/icon/core/fire.svg"
                }],
                firstCategoryId: 0
            }
        });
    
        const wrapper = mount(<Provider store={store}><AppContainer classes={{ AppContainer: {} }}/></Provider>, { attachTo: document.body });
        wrapper.find('li').simulate('click');
        expect(wrapper.find('li')).toHaveLength(1);
    })
})