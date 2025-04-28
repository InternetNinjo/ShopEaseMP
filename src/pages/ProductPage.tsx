import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';
import { Product } from '../types';

const ProductPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  
  useEffect(() => {
    let filteredProducts = [...allProducts];
    
    // Filter by category if provided
    if (categoryParam) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === categoryParam.toLowerCase()
      );
    }
    
    // Filter by price range
    filteredProducts = filteredProducts.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        // Featured - no sorting needed
        break;
    }
    
    setProducts(filteredProducts);
  }, [categoryParam, sortBy, priceRange]);
  
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };
  
  return (
    <div className="container py-5">
      <h1 className="mb-4">
        {categoryParam 
          ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Products` 
          : 'All Products'}
      </h1>
      
      <div className="row">
        {/* Filters Sidebar */}
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Filters</h5>
              
              <div className="mb-4">
                <h6>Price Range</h6>
                <div className="d-flex justify-content-between mb-2">
                  <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
                  <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="minPrice" className="form-label">Min Price</label>
                  <input 
                    type="range" 
                    className="form-range" 
                    id="minPrice" 
                    min="0" 
                    max="100000" 
                    step="1000" 
                    value={priceRange[0]} 
                    onChange={(e) => handlePriceRangeChange(e, 0)} 
                  />
                </div>
                <div>
                  <label htmlFor="maxPrice" className="form-label">Max Price</label>
                  <input 
                    type="range" 
                    className="form-range" 
                    id="maxPrice" 
                    min="0" 
                    max="100000" 
                    step="1000" 
                    value={priceRange[1]} 
                    onChange={(e) => handlePriceRangeChange(e, 1)} 
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <h6>Categories</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="electronics" checked={categoryParam === 'electronics'} />
                  <label className="form-check-label" htmlFor="electronics">
                    Electronics
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="clothing" checked={categoryParam === 'clothing'} />
                  <label className="form-check-label" htmlFor="clothing">
                    Clothing
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="home" checked={categoryParam === 'home'} />
                  <label className="form-check-label" htmlFor="home">
                    Home & Kitchen
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="books" checked={categoryParam === 'books'} />
                  <label className="form-check-label" htmlFor="books">
                    Books
                  </label>
                </div>
              </div>
              
              <div>
                <h6>Ratings</h6>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="rating" id="rating4" />
                  <label className="form-check-label" htmlFor="rating4">
                    4★ & above
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="rating" id="rating3" />
                  <label className="form-check-label" htmlFor="rating3">
                    3★ & above
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="rating" id="rating2" />
                  <label className="form-check-label" htmlFor="rating2">
                    2★ & above
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="mb-0">{products.length} products found</p>
            <div className="d-flex align-items-center">
              <label htmlFor="sortBy" className="me-2">Sort by:</label>
              <select 
                id="sortBy" 
                className="form-select" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
          
          <div className="row">
            {products.length > 0 ? (
              products.map(product => (
                <div key={product.id} className="col-md-4">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;