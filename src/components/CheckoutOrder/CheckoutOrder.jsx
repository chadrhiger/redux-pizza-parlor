function CheckoutOrder() {
  return (
    <div>
      <h1>Step 3: Checkout</h1>
      <div>
        {/* insert customer data (name, address) here */}
        {/* insert whether or not the order is for pickup or delivery */}
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add pizza name here</td>
            <td>Add pizza cost here</td>
          </tr>
        </tbody>
      </table>
      <h2>Total: $100</h2>
      <button>CHECKOUT</button>
    </div>
  );
}

export default CheckoutOrder;
