import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  // Mapear productos
  const products = [
    { id: 1, name: 'Producto 1', price: '29.99' },
    { id: 2, name: 'Producto 2', price: '19.99' },
    { id: 3, name: 'Producto 3', price: '49.99' },
  ];

  return (
    <div className="d-flex flex-column min-vh-100"> {/* Aquí se aplica flexbox para que ocupe toda la altura */}
      <Header />
      <main className="container mt-5 flex-grow-1"> {/* 'flex-grow-1' asegura que el contenido crezca para ocupar el espacio disponible */}
        <h2 className="text-center">Bienvenido a nuestra tienda</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5"> 
          {products.map(product => (
            <div className="col" key={product.id}>
              <ProductCard name={product.name} price={product.price} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
