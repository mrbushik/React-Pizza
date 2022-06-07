import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

import {setPizzas} from './redux/actions/pizzas'
import { Header} from './components';
import {Home, Cart} from './pages'
import { Route, Routes } from 'react-router-dom';

function App({setPizzas, items}) {
  React.useEffect(()=>{
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, [])
  return (
    <div className="wrapper">
        <Header />
        <div className="content">
        <Routes>
<Route path="/" element={<Home items={items} />} exact/>
<Route path="/cart" element={<Cart />} exact />
    </Routes>
        </div>
      </div>
  )
}

export default connect(
  (state) => {
    return {
      items: state.pizzas.items,
      filters: state.filters,
    };
  },
  (dispatch) => {
    return {
      setPizzas: (items) => dispatch(setPizzas(items)),
    };
  },
)(App);