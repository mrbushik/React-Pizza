import React from 'react'
import {Categories,SortPopUp, PizzaBlock,PizzaLoadingBlock } from '../components';
import {useSelector, useDispatch} from 'react-redux'
import { setCategory } from '../redux/actions/filters'
import {fethPizzas} from '../redux/actions/pizzas'
const categoryNames = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
]
const sortItems = [
  {name:'популярности', type: 'popular'},
  {name:'цена', type: 'prise'},
  {name:'алфавит', type: 'alphabet'}
]
function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)

  React.useEffect(()=>{
      dispatch(fethPizzas())
     }, [])

  const onSelectCategory = React.useCallback( index =>{
    dispatch(setCategory(index))
  }, [])

  return (
    <>
      <div className="container">
        <div className="content__top">
       <Categories
       onClickItem={onSelectCategory}
       items={categoryNames}/>
        <SortPopUp 
        items={sortItems}
        />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
           ? items.map(obj => <PizzaBlock key={`${obj.id}`} {...obj} isLoading={true}/>) 
           : Array(12).fill(<PizzaLoadingBlock/>)}
        </div>
      </div>
    </>
  )
}

export default Home
