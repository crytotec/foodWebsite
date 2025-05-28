import './Checkout.css';

function Checkout({ add }) {
  const total = add.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully... Thanks for shopping with us!');
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      {add.length === 0 ? (
        <p className="empty-checkout">No items to checkout.</p>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <ul>
              {add.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.quantity} - ₦{item.price * item.quantity}
                </li>
              ))}
            </ul>
            <p className="total">Total: ₦{total.toLocaleString()}</p>
          </div>

          <div className="checkout-section">
            <label>Delivery Address</label>
            <textarea required rows="3" placeholder="Enter your delivery address"></textarea>
          </div>

          <div className="checkout-section">
            <label>Payment Method</label>
            <select required>
              <option value="">Select a payment method</option>
              <option value="card">Card</option>
              <option value="transfer">Bank Transfer</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
