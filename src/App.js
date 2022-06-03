import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
//установить реакт редакс

import {setPizzas} from './redux/actions/pizzas'
import { Header} from './components';
import {Home, Cart} from './pages'
import { Route, Routes } from 'react-router-dom';

//  function App() {
// React.useEffect(()=>{
//   axios.get('http://localhost:3000/db.json').then(({data}) =>{
// setPizzas(data.pizzas)
//   })
// },[])

 
// }
class App extends React.Component {
  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({data}) =>{
window.store.dispatch(setPizzas(data.pizzas))
console.log('getting data');
})
  }
  render() {
    console.log(this.props.items);
    return (
      <div className="wrapper">
    <Header/>
      <div className="content">
      <Routes>
  <Route path="/" element={<Home items={[this.props.items]} />} exact/>
  <Route path="/cart" element={<Cart />} exact />
      </Routes>
      </div>
    </div>
      );
  }
}

const mapStateToProps = (state)=>{
  return{
items: state.pizzas.items,
  }
}

export default connect(mapStateToProps)(App);
