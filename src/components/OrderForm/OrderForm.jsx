function OrderForm() {

  
    return (
    <>
      <h1>Step 2: Customer Information</h1>
      <form action="">
        <input 
          type="text" 
          placeholder="Name" />
          {/* value={customer.name} /> */}
        <input
          type="text"
          placeholder="Street Address" />
        {/* //   value={customer.streetAddress} /> */}
        <input 
          type="text" 
          placeholder="City" />
        {/* //   value={customer.city} /> */}
        <input 
          type="text" 
          placeholder="Zip" />
        {/* //   value={customer.zip} /> */}
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
