import React from 'react'
import {Categories,SortPopUp, PizzaBlock} from '../components';
import {useSelector} from 'react-redux'

function Home() {
  const {items}= useSelector(({pizzas,filters}) => {
    return{
      items: pizzas.items,
    }
  });
  return (
    <>
      <div className="container">
        <div className="content__top">
       <Categories
       items={[
         'Мясные',
         'Вегетарианские',
         'Гриль',
         'Острые',
         'Закрытые',
       ]}/>
        <SortPopUp 
        items={[
          {name:'популярности', type: 'popular'},
          {name:'цена', type: 'prise'},
          {name:'алфавит', type: 'alphabet'}
        ]}
        />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items && items.map(obj => <PizzaBlock 
          key={`${obj.id}`} 
          {...obj}
          />)}
        </div>
      </div>
    </>
  )
}

export default Home
