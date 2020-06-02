import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/navbar';
import Home from './components/layout/index'
import Footer from "./components/layout/footer"
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faSearch, faShoppingCart)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
        {/* <Footer/> */}
      </header>
    </div>
  );
}

export default App;
