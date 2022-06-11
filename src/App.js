import React from 'react';
import { useDispatch} from 'react-redux'

import {fethPizzas} from './redux/actions/pizzas'
import { Header} from './components';
import {Home, Cart} from './pages'
import { Route, Routes } from 'react-router-dom';

function App() {
const dispatch = useDispatch()

  React.useEffect(()=>{
 console.log(fethPizzas())
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
