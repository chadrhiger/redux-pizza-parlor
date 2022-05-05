import {useState} from 'react';
import axios from 'axios';
import {useDispatch, useStore} from 'react-redux'

function OrderForm() {
    const dispatch = useDispatch();

    const [customer_name, setCustomer_name] = useState('');
    const [street_address, setStreet_address] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');


    const onSubmit = (e) =>{
        e.preventDefault();

        axios({
            method: 'POST',
            url: '/api/order',
            data: {customer_name, street_address, city, zip, type}
        })
        .then(()=>{
            // call the GET reducer
        })
        .catch()

    }

    return (
    <>
      <h1>Step 2: Customer Information</h1>
      <form action="">
        <input 
          onChange={(event) => setCustomer_name(event.target.value)}
          type="text" 
          placeholder="Name" 
          value={customer_name} />
        <input
          onChange={(event) => setStreet_address(event.target.value)}
          type="text"
          placeholder="Street Address" 
          value={street_address} />
        <input 
          onChange={(event) => setCity(event.target.value)}
          type="text" 
          placeholder="City" 
           value={city} />
        <input 
          onChange={(event) => setZip(event.target.value)}
          type="text" 
          placeholder="Zip" 
          value={zip} />

        <input 
                onChange={(event) => setType(event.target.value)}
                type="radio" 
                id="pickup" 
                name="type"/>
        <label htmlFor="pickup">Pickup</label>


        <input 
            onChange={(event) => setType(event.target.value)}
            type="radio"
            id="delivery" 
            name="type"/>
        <label htmlFor="delivery">Delivery</label>

        <button>NEXT</button>
      </form>
    </>
  );
}

export default OrderForm;
