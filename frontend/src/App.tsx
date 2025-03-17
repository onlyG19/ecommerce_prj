import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import ProductList from './components/ProductList';
import CreateProduct from './components/CrearProduct';
import Home from './pages/Home';
import OtherComponent from './components/OtherComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar a la izquierda */}
        <Sidebar />

        {/* Contenido Principal */}
        <div className="content-container flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/new-view" element={<OtherComponent />} />
            <Route path="/create-product" element={<CreateProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
