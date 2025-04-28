import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>ShopEase</h5>
            <p>
              Your one-stop destination for all your shopping needs. Quality products at affordable prices.
            </p>
            <div className="social-icons mt-4">
              <a href="#"><SiFacebook size={18} /></a>
              <a href="#"><SiX size={18} /></a>
              <a href="#"><SiInstagram size={18} /></a>
              <a href="#"><SiLinkedin size={18} /></a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><Link to="/products?category=electronics">Electronics</Link></li>
              <li><Link to="/products?category=clothing">Clothing</Link></li>
              <li><Link to="/products?category=home">Home & Kitchen</Link></li>
              <li><Link to="/products?category=books">Books</Link></li>
              <li><Link to="/products?category=beauty">Beauty & Personal Care</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <MapPin size={18} className="me-2" />
                <span>123 Commerce Street, New Delhi, India</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Phone size={18} className="me-2" />
                <span>+91 98765 43210</span>
              </li>
              <li className="d-flex align-items-center">
                <Mail size={18} className="me-2" />
                <span>support@shopease.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;