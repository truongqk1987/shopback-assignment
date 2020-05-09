import {
    loadShopbackData,
    updateFirstCategory,
    LOAD_SHOPBACK_DATA,
    UPDATE_FIRST_CATEGORY,
} from './ShopbackActionCreator';


describe('actions', () => {
  it('should create an action to load shopback data', () => {
    const expectedAction = {
      type: LOAD_SHOPBACK_DATA,
      payload: {}
    }
    expect(loadShopbackData({})).toEqual(expectedAction)
  })

  it('should create an action to update first category', () => {
    const expectedAction = {
      type: UPDATE_FIRST_CATEGORY,
      payload: { id: 1 }
    }
    expect(updateFirstCategory({ id: 1 })).toEqual(expectedAction)
  })
})