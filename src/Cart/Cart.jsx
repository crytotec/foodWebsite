import './Cart.css';
import { useNavigate, Link} from 'react-router-dom';
function Cart({ add, setAdd }) {
  const navigate = useNavigate();

  const del = (id) => {
    const updated = add.filter((item) => item.id !== id);
    setAdd(updated);
  };

  const increaseItem = (id) => {
    const updated = add.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setAdd(updated);
  };

  const decreaseItem = (id) => {
    const updated = add
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
    setAdd(updated);
  };

  const total = add.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = total * 0.075;
  const grandTotal = total + tax;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {add.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {add.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.img} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>₦{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseItem(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseItem(item.id)}>+</button>
                </div>
                <button onClick={() => del(item.id)} className="cart-delete">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Subtotal: ₦{total.toLocaleString()}</p>
            <p>Tax (7.5%): ₦{tax.toLocaleString()}</p>
            <h3>Total: ₦{grandTotal.toLocaleString()}</h3>
            <textarea placeholder="Add special instructions e.g No Onions..." className="order-note"></textarea>
            <div className="cart-actions">
              <button className="back-btn" onClick={() => navigate('/')}>
                Continue Shopping
              </button>
              <Link to='/Checkout'>
              <button className="checkout-btn">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
