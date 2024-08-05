import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import pizzasData from '../pizzas.json';
import { CartContext } from '../context/CartContext';
import './PizzaDetail.css';

function PizzaDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const pizza = pizzasData.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <h2>Pizza no encontrada</h2>;
  }

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} className="pizza-detail-image" />
      <div className="pizza-detail-info">
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <p>Precio: ${pizza.price.toLocaleString('es-CL')}</p>
        <button onClick={() => addToCart(pizza)}>Añadir 🛒</button>
      </div>
    </div>
  );
}

export default PizzaDetail;
