import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import pizzasData from '../pizzas.json';
import { CartContext } from '../context/CartContext';
import './Home.css';

function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="home">
      <h2>Catálogo de Pizzas</h2>
      <div className="pizza-list">
        {pizzasData.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.img} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>Ingredientes:</p>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))}
            </ul>
            <p className="pizza-price">
              ${pizza.price.toLocaleString('es-CL')}
            </p>
            <div className="pizza-buttons">
              <Link to={`/pizza/${pizza.id}`}>
                <button className="view-more">Ver Más</button>
              </Link>
              <button onClick={() => addToCart(pizza)}>Añadir 🛒</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
