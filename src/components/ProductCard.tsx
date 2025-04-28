import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="product-card card h-100">
      <div className="position-relative">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} className="card-img-top" alt={product.name} />
        </Link>
        {discountPercentage > 0 && (
          <span className="position-absolute top-0 end-0 bg-danger text-white py-1 px-2 m-2 rounded">
            {discountPercentage}% OFF
          </span>
        )}
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h5>
        <p className="card-text text-muted small">{product.category}</p>
        <div className="mt-auto">
          <div className="d-flex align-items-center mb-3">
            <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="original-price ms-2">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <button className="btn btn-primary w-100">
            <ShoppingCart size={18} className="me-2" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;