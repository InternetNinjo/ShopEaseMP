import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveInfo: false,
    paymentMethod: 'credit'
  });
  
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setOrderPlaced(true);
  };
  
  // Mock cart items
  const cartItems = [
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 1 },
    { productId: 5, quantity: 1 }
  ];
  
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
  
  if (orderPlaced) {
    return (
      <div className="container py-5 text-center">
        <div className="py-5">
          <div className="mb-4">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2>Order Placed Successfully!</h2>
          <p className="mb-4">Thank you for your purchase. Your order has been placed successfully.</p>
          <p className="mb-4">Order #: ORD-{Math.floor(100000 + Math.random() * 900000)}</p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-5">
      <h1 className="mb-4">Checkout</h1>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h5 className="mb-4">Shipping Information</h5>
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" id="state" required>
                      <option value="">Choose...</option>
                      <option value="AN">Andaman and Nicobar Islands</option>
                      <option value="AP">Andhra Pradesh</option>
                      <option value="AR">Arunachal Pradesh</option>
                      <option value="AS">Assam</option>
                      <option value="BR">Bihar</option>
                      <option value="CH">Chandigarh</option>
                      <option value="CT">Chhattisgarh</option>
                      <option value="DN">Dadra and Nagar Haveli</option>
                      <option value="DD">Daman and Diu</option>
                      <option value="DL">Delhi</option>
                      <option value="GA">Goa</option>
                      <option value="GJ">Gujarat</option>
                      <option value="HR">Haryana</option>
                      <option value="HP">Himachal Pradesh</option>
                      <option value="JK">Jammu and Kashmir</option>
                      <option value="JH">Jharkhand</option>
                      <option value="KA">Karnataka</option>
                      <option value="KL">Kerala</option>
                      <option value="LA">Ladakh</option>
                      <option value="LD">Lakshadweep</option>
                      <option value="MP">Madhya Pradesh</option>
                      <option value="MH">Maharashtra</option>
                      <option value="MN">Manipur</option>
                      <option value="ML">Meghalaya</option>
                      <option value="MZ">Mizoram</option>
                      <option value="NL">Nagaland</option>
                      <option value="OR">Odisha</option>
                      <option value="PY">Puducherry</option>
                      <option value="PB">Punjab</option>
                      <option value="RJ">Rajasthan</option>
                      <option value="SK">Sikkim</option>
                      <option value="TN">Tamil Nadu</option>
                      <option value="TG">Telangana</option>
                      <option value="TR">Tripura</option>
                      <option value="UP">Uttar Pradesh</option>
                      <option value="UT">Uttarakhand</option>
                      <option value="WB">West Bengal</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="pincode" className="form-label">PIN Code</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="pincode" 
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-check mb-4">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="saveInfo" 
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="saveInfo">
                    Save this information for next time
                  </label>
                </div>
                
                <h5 className="mb-4">Payment Method</h5>
                
                <div className="mb-3">
                  <div className="form-check mb-2">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="paymentMethod" 
                      id="credit" 
                      value="credit"
                      checked={formData.paymentMethod === 'credit'}
                      onChange={handleChange}
                      required 
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit / Debit Card
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="paymentMethod" 
                      id="upi" 
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="upi">
                      UPI
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="paymentMethod" 
                      id="netbanking" 
                      value="netbanking"
                      checked={formData.paymentMethod === 'netbanking'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="netbanking">
                      Net Banking
                    </label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="paymentMethod" 
                      id="cod" 
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="cod">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                
                {formData.paymentMethod === 'credit' && (
                  <div className="payment-form">
                    <div className="card-icons mb-3">
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="me-2" />
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="me-2" />
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="American Express" />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="cardName" className="form-label">Name on Card</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="cardName" 
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="cardNumber" className="form-label">Card Number</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="cardNumber" 
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        required 
                      />
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="expiryDate" 
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required 
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cvv" className="form-label">CVV</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="cvv" 
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="XXX"
                          required 
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {formData.paymentMethod === 'upi' && (
                  <div className="mb-3">
                    <label htmlFor="upiId" className="form-label">UPI ID</label>
                    <input type="text" className="form-control" id="upiId" placeholder="yourname@upi" required />
                  </div>
                )}
                
                {formData.paymentMethod === 'netbanking' && (
                  <div className="mb-3">
                    <label htmlFor="bank" className="form-label">Select Bank</label>
                    <select className="form-select" id="bank" required>
                      <option value="">Choose...</option>
                      <option>State Bank of India</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                      <option>Kotak Mahindra Bank</option>
                      <option>Punjab National Bank</option>
                      <option>Bank of Baroda</option>
                      <option>Other</option>
                    </select>
                  </div>
                )}
                
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary py-2">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm cart-summary">
            <div className="card-body">
              <h5 className="mb-4">Order Summary</h5>
              
              {cartProducts.map(item => (
                <div key={item?.id} className="d-flex justify-content-between mb-3">
                  <div>
                    <span>{item?.name} </span>
                    <span className="text-muted">x {item?.quantity}</span>
                  </div>
                  <span>₹{((item?.price || 0) * (item?.quantity || 0)).toLocaleString('en-IN')}</span>
                </div>
              ))}
              
              <hr />
              
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
              
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h6 className="mb-2">Have a coupon?</h6>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter coupon code" />
                    <button className="btn btn-outline-primary">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;