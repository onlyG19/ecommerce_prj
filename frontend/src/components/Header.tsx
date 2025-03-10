import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo de la tienda" width="150" />
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">Productos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
