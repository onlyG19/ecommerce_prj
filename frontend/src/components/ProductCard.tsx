import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProductCardProps {
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="/assets/default-product.jpg" className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
