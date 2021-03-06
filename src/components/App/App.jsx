import React from 'react';
import axios from 'axios';
import './App.css';
import OrderForm from '../OrderForm/OrderForm';
import FetchMenu from '../FetchMenu';
import CheckoutOrder from '../CheckoutOrder/CheckoutOrder';


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
      <CheckoutOrder />
    </div>
  );
}

export default App;
