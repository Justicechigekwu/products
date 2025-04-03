import { Link } from "react-router-dom";

  const Cart = ({ cart, handleAddToCart, handleRemoveFromCart }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  
   
  return (
    <div className="cartContainer">
      <div className="cart">
        <h2 className="shopping">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="shopping">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p className="cart-item-title">
                {item.title} ${item.price} x {item.quantity}
              </p>
              <p className="cart-item-buttons">
              <button className="plus-button" onClick={() => handleRemoveFromCart(item.id)}>-</button>
              <button className="minus-button" onClick={() => handleAddToCart(item)}>+</button>
              </p>
            </div>
          ))
        )}
  
        <p className="shopping">Total Items: {totalItems}</p>
        <p className="shopping">Total Price: ${totalPrice}</p>
        
        <div className="front-back">
          <button className="go-checkout" disabled={cart.length === 1}>Proceed to Checkout</button>
  
          <Link to="/">
            <button className="back-product">Back to Products</button>
          </Link>
        </div>
  
      </div>
    </div>
  );
};

export default Cart;
