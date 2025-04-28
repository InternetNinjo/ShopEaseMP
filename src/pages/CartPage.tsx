import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { allProducts } from '../data/products';
import { CartItem } from '../types';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 1 },
    { productId: 5, quantity: 1 }
  ]);
  
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
  };
  
  const getCartProducts = () => {
    return cartItems.map(item => {
      const product = allProducts.find(p => p.id === item.productId);
      return { ...product, quantity: item.quantity };
    }).filter(item => item !== undefined);
  };
  
  const cartProducts = getCartProducts();
  
  const calculateSubtotal = () => {
    return cartProducts.reduce((total, item) => {
      return total + (item?.price || 0) * (item?.quantity || 0);
    }, 0);
  };
  
  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? (subtotal > 1000 ? 0 : 100) : 0;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;
  
  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <div className="py-5">
          <ShoppingBag size={64} className="text-muted mb-4" />
          <h2>Your cart is empty</h2>
          <p className="mb-4">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-5">
      <h1 className="mb-4">Your Shopping Cart</h1>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="text-muted">
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map(item => (
                      <tr key={item?.id} className="cart-item">
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={item?.image} alt={item?.name} className="me-3" />
                            <div>
                              <h6 className="mb-0">{item?.name}</h6>
                              <small className="text-muted">{item?.category}</small>
                            </div>
                          </div>
                        </td>
                        <td>₹{item?.price.toLocaleString('en-IN')}</td>
                        <td>
                          <div className="quantity-selector">
                            <button 
                              className="btn" 
                              onClick={() => updateQuantity(item?.id || 0, (item?.quantity || 0) - 1)}
                            >
                              -
                            </button>
                            <input 
                              type="number" 
                              className="form-control" 
                              value={item?.quantity} 
                              onChange={(e) => updateQuantity(item?.id || 0, parseInt(e.target.value) || 1)} 
                              min="1" 
                            />
                            <button 
                              className="btn" 
                              onClick={() => updateQuantity(item?.id || 0, (item?.quantity || 0) + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>₹{((item?.price || 0) * (item?.quantity || 0)).toLocaleString('en-IN')}</td>
                        <td>
                          <button 
                            className="btn btn-sm text-danger" 
                            onClick={() => removeItem(item?.id || 0)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="d-flex justify-content-between">
            <Link to="/products" className="btn btn-outline-primary">
              Continue Shopping
            </Link>
            <button className="btn btn-outline-danger">
              Clear Cart
            </button>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm cart-summary">
            <div className="card-body">
              <h5 className="mb-4">Order Summary</h5>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>{shipping > 0 ? `₹${shipping.toLocaleString('en-IN')}` : 'Free'}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (18% GST)</span>
                <span>₹{tax.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4 total">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
              </div>
              
              <div className="d-grid">
                <Link to="/checkout" className="btn btn-primary py-2">
                  Proceed to Checkout
                </Link>
              </div>
              
              <div className="mt-3">
                <div className="d-flex justify-content-center mt-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="me-2" height="24" />
                  <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="me-2" height="24" />
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968279.png" alt="PayPal" className="me-2" height="24" />
                  <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="American Express" height="24" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
              <h6>Have a coupon?</h6>
              <div className="input-group mt-2">
                <input type="text" className="form-control" placeholder="Enter coupon code" />
                <button className="btn btn-outline-primary">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;