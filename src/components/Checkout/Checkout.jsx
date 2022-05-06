function Checkout() {
  return (
    <div>
      <h1>Step 3: Checkout</h1>
      <div>
        {/* insert customer data (name, address) here */}
        {/* insert whether or not the order is for pickup or delivery */}
      </div>
      <table>
        <thead>
          <th>Name</th>
          <th>Cost</th>
        </thead>
        <tbody>
          <tr>
            <td>Add pizza name here</td>
            <td>Add pizza cost here</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Checkout;
