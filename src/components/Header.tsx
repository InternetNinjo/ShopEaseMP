import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/header_icon.png" alt="ShopEase Logo" className="logo" />
            <span className="ms-2">ShopEase</span>
          </Link>
          
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/products?category=electronics">Electronics</Link></li>
                  <li><Link className="dropdown-item" to="/products?category=clothing">Clothing</Link></li>
                  <li><Link className="dropdown-item" to="/products?category=home">Home & Kitchen</Link></li>
                  <li><Link className="dropdown-item" to="/products?category=books">Books</Link></li>
                </ul>
              </li>
            </ul>
            
            <div className="d-flex align-items-center">
              <form className="d-flex me-3">
                <div className="input-group">
                  <input className="form-control" type="search" placeholder="Search products..." aria-label="Search" />
                  <button className="btn btn-outline-primary" type="submit">
                    <Search size={18} />
                  </button>
                </div>
              </form>
              
              <Link to="/cart" className="btn btn-outline-primary position-relative">
                <ShoppingCart size={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;