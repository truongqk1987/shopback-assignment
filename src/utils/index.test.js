import { optimizeStoreDisplayTex, getSVGUrl, sortCategoryByHistory } from './index';

describe('Utils', () => {
    it('should optimizeStoreDisplayTex work correctly', () => {
        expect(optimizeStoreDisplayTex('Up to 8.0% Cashback via ShopBack App')).toEqual('Up to 8.0%')
        expect(optimizeStoreDisplayTex('6.0% Cashback')).toEqual('6.0% Cashback');
    })

    it('should getSVGUrl work correctly', () => {
        expect(getSVGUrl('popular')).toEqual('https://cloud.shopback.com/raw/upload/static/images/icon/core/fire.svg');
    })
})