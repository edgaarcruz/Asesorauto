import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/navbar';
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
      </header>
    </div>
  );
}

export default App;
