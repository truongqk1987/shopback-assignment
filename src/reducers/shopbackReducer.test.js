import reducer, { INITIAL_STATE } from './shopbackReducer'
import {
    LOAD_SHOPBACK_DATA_SUCCESSFUL,
    LOAD_SHOPBACK_DATA_FAILED, 
    UPDATE_FIRST_CATEGORY
} from 'actions/ShopbackActionCreator'

describe('shopback reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
    }) 

    it('should handle LOAD_SHOPBACK_DATA_SUCCESSFUL', () => {
        expect(reducer({ firstCategoryId: 1 }, {
            type: LOAD_SHOPBACK_DATA_SUCCESSFUL, 
            data: {
                categories: [],
                stores: []
            } 
        })).toEqual({
            categories: [],
            stores: [],
            firstCategoryId: 1
        })
    })

    it('should handle LOAD_SHOPBACK_DATA_FAILED', () => {
        expect(reducer({ firstCategoryId: 1 }, {
            type: LOAD_SHOPBACK_DATA_FAILED, 
            error: {
                status: 400,
                messageId: 'eror.400' 
            } 
        })).toEqual({
            firstCategoryId: 1,
            error: {
                status: 400,
                messageId: 'eror.400'
            }
        } )
    })

    it('should handle UPDATE_FIRST_CATEGORY', () => {
        expect(reducer({ firstCategoryId: -1 }, {
            type: UPDATE_FIRST_CATEGORY, 
            payload: { id: 1 }
        })).toEqual({
            firstCategoryId: 1
        } )
    })
})