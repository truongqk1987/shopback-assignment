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
        expect(reducer({ firstCategory: null }, {
            type: LOAD_SHOPBACK_DATA_SUCCESSFUL, 
            data: {
                categories: [],
                stores: []
            } 
        })).toEqual({
            categories: [],
            stores: [],
            firstCategory: null
        })
    })

    it('should handle LOAD_SHOPBACK_DATA_FAILED', () => {
        expect(reducer({ firstCategory: null }, {
            type: LOAD_SHOPBACK_DATA_FAILED, 
            error: {
                status: 400,
                messageId: 'eror.400' 
            } 
        })).toEqual({
            firstCategory: null,
            error: {
                status: 400,
                messageId: 'eror.400'
            }
        } )
    })

    it('should handle UPDATE_FIRST_CATEGORY', () => {
        expect(reducer({ firstCategory: null }, { 
            type: UPDATE_FIRST_CATEGORY, 
            payload: { id: 1 }
        })).toEqual({
            firstCategory: { id: 1 }
        } )
    })
})