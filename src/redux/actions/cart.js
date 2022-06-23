export const addPizzaToCart =  (pizzaObj) =>({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})
export const clearCart =  () =>({
    type: 'CLEAR_CART',
})

export const romoveCartItem =  (id) =>({
    type: 'REMOVE_CART_ITEM',
    payload: id,
})
export const plusCartItem = (catIndex) => ({
    type: 'PLUS_CART_ITEM',
    payload: catIndex,
})
export const minusCartItem = (catIndex) => ({
    type: 'MINUS_CART_ITEM',
    payload: catIndex,
})