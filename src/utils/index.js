export const optimizeStoreDisplayTex = (displayText) => {
    const matches = displayText.match(/(Up to ([0-9.%$])+|([0-9.%$])+ Cashback)/gi)
    return (matches && matches.length > 0 && matches[0]);
}

export const getSVGUrl = (categoryShortName) => {
    const CATEGORY_ICON_MAP = {
        popular: 'fire',
        dining: 'burger',
        travel: 'plane',
        electronics: 'laptop',
        fashion: 'tshirt',
        groceries: 'lettuce',
        'health-beauty': 'lipstick',
        'home-living': 'couch',
        'sports-outdoors': 'basketball'
    }
    return `https://cloud.shopback.com/raw/upload/static/images/icon/core/${CATEGORY_ICON_MAP[categoryShortName]}.svg`
}