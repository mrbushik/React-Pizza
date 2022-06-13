import axios from 'axios';

export const setLoaded = val =>({
    type: 'SET_LOADED',
    payload: val,
})

export const fethPizzas = () => (dispatch)=>{
    dispatch(setLoaded(false))
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});