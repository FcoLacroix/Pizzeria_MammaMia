import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import './App.css';

function App() {
  const { total } = useContext(CartContext);

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>Pizzería Mamma Mia!</h1>
          <nav>
            <a href="/">Home</a>
            <Link to="/carrito" className="cart-button">
              Carrito: ${total.toLocaleString('es-CL')}
            </Link>
          </nav>
        </div>
      </header>
      <div className="banner">
        <h2>¡Pizzería Mamma Mia!</h2>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
