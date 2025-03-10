import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CrearProduct';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import OtherComponent from './components/OtherComponent';

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
