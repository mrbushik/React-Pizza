const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const getTotalSum = (obj, key) =>{
 const [firstKey, ...keys] = key.split('.');
  return Object.keys(obj).reduce((sum, key) => {
    const value = keys.reduce((val,key)=> {
      if(typeof  val[key] === 'object'){
        return val[key];
      }else{
        return val;
      }
     }, obj[firstKey]);
      return sum + value;
    },0,);
  
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);
const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id] ?
        [action.payload] :
        [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems)
        }
      };

      // const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum,
      //   0,
      // );
      // const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum,
      //   0,
      // );
      
   const totalCount = (newItems, 'item.length')
   const totalPrice = (newItems, 'item.totalPrice')

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case 'CLEAR_CART':
      return {
        items: {}, totalCount: 0, totalPrice: 0,
      }

      case 'REMOVE_CART_ITEM':
        const newItems = {
          ...state.items
        }
        const currentTotalPrice = newItems[action.payload].totalPrice
        const currentTotalCount = newItems[action.payload].items.length
        delete newItems[action.payload]
        return {
          ...state,
          items: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount,
        }
        default:
          return state;
  }
};
export default cart