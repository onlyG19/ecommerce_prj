import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CrearProduct';

import OtherComponent from './components/OtherComponent';

function Home() {
  return (
    <div>
      <h1>Bienvenido a la aplicación</h1>
      <p>Selecciona una opción para ver más:</p>
      <ul>
        <li>
          <Link to="/products">Ver lista de productos</Link>
        </li>
        <li>
          <Link to="/new-view">Ver nueva vista</Link>
        </li>
        <li>
          <Link to="/create-product">Crear un nuevo producto</Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal (Home) */}
        <Route path="/" element={<Home />} />
        {/* Ruta para ver lista de productos */}
        <Route path="/products" element={<ProductList />} />
        {/* Ruta para la nueva vista Ejemplo*/}
        <Route path="/new-view" element={<OtherComponent />} />
        {/* Ruta para crear un nuevo producto */}
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
