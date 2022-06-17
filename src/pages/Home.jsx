import React from 'react'
import {Categories,SortPopUp, PizzaBlock,PizzaLoadingBlock } from '../components';
import {useSelector, useDispatch} from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import {fethPizzas} from '../redux/actions/pizzas'
import {addPizzaToCart} from '../redux/actions/cart'
const categoryNames = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
]
const sortItems = [
  {name:'популярности', type: 'popular',  order: 'deck'},
  {name:'цена', type: 'price',  order: 'deck'},
  {name:'алфавит', type: 'name',  order: 'asc'}
]
function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const { category, sortBy} = useSelector(({filters}) => filters)

  React.useEffect(()=>{
       dispatch(fethPizzas(category, sortBy))
     }, [category, sortBy])

  const onSelectCategory = React.useCallback( index =>{
    dispatch(setCategory(index))
  }, [dispatch])
  const onSelecSortType = React.useCallback( type =>{
    dispatch(setSortBy(type))
  }, [dispatch])
  const handleAddPizzaToCart = obj => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    })
    console.log(obj);
  }
  return (
    <>
      <div className="container">
        <div className="content__top">
       <Categories
       activeCategory={category}
       onClickCategory={onSelectCategory}
       items={categoryNames}
       />
        <SortPopUp 
        activeSortType={sortBy.type}
        items={sortItems} 
        onClickSortType={onSelecSortType}
        />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
           ? items.map(obj => <PizzaBlock onClickAddPizza={(obj)=> handleAddPizzaToCart(obj)}
           addedCount={cartItems[obj.id] && cartItems[obj.id].length}
           key={`${obj.id}`} 
            {...obj} />) 
           : Array(12)
           .fill(0)
           .map((_,index)=><PizzaLoadingBlock key={index}/>) }
        </div>
      </div>
    </>
  )
}

export default Home
