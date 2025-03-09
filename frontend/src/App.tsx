import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
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
        <Route path="/products" element={<ProductList />} />
        <Route path="/new-view" element={<OtherComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
