import React from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux'

import {setPizzas} from './redux/actions/pizzas'
import { Header} from './components';
import {Home, Cart} from './pages'
import { Route, Routes } from 'react-router-dom';

function App() {
const dispatch = useDispatch()


// console.log(state);
  React.useEffect(()=>{
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
dispatch(setPizzas(data.pizzas))
  });
  }, [])
  return (
    <div className="wrapper">
        <Header />
        <div className="content">
        <Routes>
<Route path="/" element={<Home />} exact/>
<Route path="/cart" element={<Cart />} exact />
    </Routes>
        </div>
      </div>
  )
}

export default App

// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   },
// )(App);