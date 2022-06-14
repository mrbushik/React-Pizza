import React from 'react'
import {Categories,SortPopUp, PizzaBlock,PizzaLoadingBlock } from '../components';
import {useSelector, useDispatch} from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import {fethPizzas} from '../redux/actions/pizzas'
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
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const { category, sortBy} = useSelector(({filters}) => filters)

  React.useEffect(()=>{
       dispatch(fethPizzas(category, sortBy))
     }, [category, sortBy])

  const onSelectCategory = React.useCallback( index =>{
    dispatch(setCategory(index))
  }, [])
  const onSelecSortType = React.useCallback( type =>{
    dispatch(setSortBy(type))
  }, [])
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
           ? items.map(obj => <PizzaBlock key={`${obj.id}`} {...obj} isLoading={true}/>) 
           : Array(12)
           .fill(0)
           .map((_,index)=><PizzaLoadingBlock key={index}/>) }
        </div>
      </div>
    </>
  )
}

export default Home
