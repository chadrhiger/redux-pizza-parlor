import React from 'react';
import axios from 'axios';
import './App.css';
import OrderForm from '../OrderForm/OrderForm';
import FetchMenu from '../FetchMenu';
import Checkout from '../Checkout/Checkout';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <FetchMenu />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <OrderForm />
      <Checkout />
    </div>
  );
}

export default App;
