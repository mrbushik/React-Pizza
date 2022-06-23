export const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload: {type, order},
})
export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
})
export const plusItem = (catIndex) => ({
    type: 'PLUS_CART_ITEM',
    payload: catIndex,
})
export const minusItem = (catIndex) => ({
    type: 'MINUS_CART_ITEM',
    payload: catIndex,
})