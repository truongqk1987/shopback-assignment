import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

import { loadShopbackData, watchLoadShopbackData, Api } from './shopbackSaga';
import {
    LOAD_SHOPBACK_DATA_SUCCESSFUL, LOAD_SHOPBACK_DATA_FAILED,
} from 'actions/ShopbackActionCreator';

describe('shopback Saga', () => {
    it('should wait for every LOAD_SHOPBACK_DATA action and call loadShopbackData', async () => {
        const generator = watchLoadShopbackData();
        expect(generator.next().value)
            .toEqual(takeEvery('LOAD_SHOPBACK_DATA', loadShopbackData));
    })

    it('should call load shopback api and dispatch success action', async () => {
        const dummyShopbackData = {
            categories: [],
            stores: []
        }
        const requestShopbackData = jest.spyOn(Api, 'getShopbackData')
            .mockImplementation(() => Promise.resolve(dummyShopbackData)); 

        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
          }, loadShopbackData);


        expect(requestShopbackData).toHaveBeenCalledTimes(1); 
        expect(dispatched).toEqual([{ type: LOAD_SHOPBACK_DATA_SUCCESSFUL, data: { categories: [], stores: [] } }]);
        requestShopbackData.mockClear();
    })

    it('should call load shopback api and dispatch error action', async () => {
        const dummyShopbackData = {
        }
        const requestShopbackData = jest.spyOn(Api, 'getShopbackData')
            .mockImplementation(() => Promise.reject(dummyShopbackData)); 

        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
          }, loadShopbackData);


        expect(requestShopbackData).toHaveBeenCalledTimes(1); 
        expect(dispatched).toEqual([{ type: LOAD_SHOPBACK_DATA_FAILED, error: {} }]); 
        requestShopbackData.mockClear();
    })
})