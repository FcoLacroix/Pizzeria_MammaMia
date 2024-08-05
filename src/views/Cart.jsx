import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cart, increment, decrement, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div className="cart-list">
          {cart.map((pizza) => (
            <div key={pizza.id} className="cart-item">
              <img src={pizza.img} alt={pizza.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{pizza.name}</h3>
                <p className="cart-item-price">
                  ${ (pizza.price * pizza.quantity).toLocaleString('es-CL') }
                </p>
                <div className="cart-item-controls">
                  <button onClick={() => decrement(pizza.id)} className="cart-item-btn">-</button>
                  <span className="cart-item-quantity">{pizza.quantity}</span>
                  <button onClick={() => increment(pizza.id)} className="cart-item-btn">+</button>
                </div>
                <button onClick={() => removeFromCart(pizza.id)} className="cart-item-remove">Eliminar producto</button>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Total: ${ total.toLocaleString('es-CL') }</h3>
          <button className="cart-checkout-btn">Ir a Pagar</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
