import {useState} from 'react';
import axios from 'axios';
import {useDispatch, useStore} from 'react-redux'

function OrderForm() {
    const dispatch = useDispatch();

    const [customer_name, setCustomer_name] = useState('');
    const [street_address, setStreet_address] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');


    const onSubmit = (e) =>{
        e.preventDefault();

        axios({
            method: 'POST',
            url: '/api/order',
            data: {customer_name, street_address, city, zip}
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
          type="text" 
          placeholder="Name" />
          {/* value={customer_name} /> */}
        <input
          type="text"
          placeholder="Street Address" />
        {/*    value={street_address} /> */}
        <input 
          type="text" 
          placeholder="City" />
        {/*    value={city} /> */}
        <input 
          type="text" 
          placeholder="Zip" />
        {/*    value={zip} /> */}
        <input type="radio" id="pickup" name="pickup_delivery"/>
        <label htmlFor="pickup">Pickup</label>
        <input type="radio" id="delivery" name="pickup_delivery"/>
        <label htmlFor="delivery">Delivery</label>
        <button>NEXT</button>
      </form>
    </>
  );
}

export default OrderForm;
