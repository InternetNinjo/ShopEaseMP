import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { allProducts } from '../data/products';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    if (id) {
      const foundProduct = allProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct || null);
    }
  }, [id]);
  
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  const handleQuantityChange = (value: number) => {
    if (quantity + value > 0) {
      setQuantity(quantity + value);
    }
  };
  
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <img src={product.image} alt={product.name} className="img-fluid product-detail-img w-100" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <img src={product.image} alt={product.name} className="img-fluid border" />
            </div>
            {product.gallery && product.gallery.map((img, index) => (
              <div key={index} className="col-3">
                <img src={img} alt={`${product.name} ${index + 1}`} className="img-fluid border" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="product-info">
            <h1>{product.name}</h1>
            
            <div className="d-flex align-items-center mb-3">
              <div className="d-flex align-items-center">
                <Star size={18} className="text-warning" fill="#ffc107" />
                <Star size={18} className="text-warning" fill="#ffc107" />
                <Star size={18} className="text-warning" fill="#ffc107" />
                <Star size={18} className="text-warning" fill="#ffc107" />
                <Star size={18} className="text-warning" />
              </div>
              <span className="ms-2 text-muted">(120 reviews)</span>
            </div>
            
            <div className="price d-flex align-items-center">
              <span>₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price ms-2">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="discount ms-2">{discountPercentage}% OFF</span>
                </>
              )}
            </div>
            
            <div className="mb-4">
              <p className="text-success">In Stock</p>
            </div>
            
            <div className="mb-4">
              <h5 className="mb-2">Description</h5>
              <p>{product.description}</p>
            </div>
            
            <div className="mb-4">
              <h5 className="mb-2">Quantity</h5>
              <div className="quantity-selector">
                <button 
                  className="btn" 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  className="form-control" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} 
                  min="1" 
                />
                <button 
                  className="btn" 
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="d-grid gap-2 d-md-flex mb-4">
              <button className="btn btn-primary py-2 px-4 flex-grow-1">
                <ShoppingCart size={18} className="me-2" /> Add to Cart
              </button>
              <button className="btn btn-outline-primary py-2 px-3">
                <Heart size={18} />
              </button>
              <button className="btn btn-outline-primary py-2 px-3">
                <Share2 size={18} />
              </button>
            </div>
            
            <div className="card border-0 bg-light mb-4">
              <div className="card-body">
                <div className="d-flex mb-3">
                  <div className="me-3">
                    <Truck size={24} className="text-primary" />
                  </div>
                  <div>
                    <h6 className="mb-1">Free Delivery</h6>
                    <p className="text-muted mb-0 small">Orders over ₹499</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="me-3">
                    <RotateCcw size={24} className="text-primary" />
                  </div>
                  <div>
                    <h6 className="mb-1">10 Days Return</h6>
                    <p className="text-muted mb-0 small">If goods have problems</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-3">
                    <Shield size={24} className="text-primary" />
                  </div>
                  <div>
                    <h6 className="mb-1">Secure Payment</h6>
                    <p className="text-muted mb-0 small">100% secure payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <ul className="nav nav-tabs" id="productTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button 
                className={`nav-link ${activeTab === 'description' ? 'active' : ''}`} 
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className={`nav-link ${activeTab === 'specifications' ? 'active' : ''}`} 
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`} 
                onClick={() => setActiveTab('reviews')}
              >
                Reviews (120)
              </button>
            </li>
          </ul>
          
          <div className="tab-content p-4 border border-top-0 rounded-bottom">
            <div className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`}>
              <p>{product.description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.</p>
              <p>Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei sollicitudin urna diam, sed commodo purus porta ut.</p>
            </div>
            
            <div className={`tab-pane fade ${activeTab === 'specifications' ? 'show active' : ''}`}>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row" className="bg-light">Brand</th>
                      <td>{product.brand || 'ShopEase'}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="bg-light">Model</th>
                      <td>{product.model || 'Standard'}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="bg-light">Color</th>
                      <td>{product.color || 'Multiple'}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="bg-light">Dimensions</th>
                      <td>{product.dimensions || 'Standard Size'}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="bg-light">Weight</th>
                      <td>{product.weight || '0.5 kg'}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="bg-light">Warranty</th>
                      <td>{product.warranty || '1 Year Manufacturer Warranty'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`}>
              <div className="d-flex align-items-center mb-4">
                <div className="me-3">
                  <h1 className="display-4 fw-bold mb-0">4.2</h1>
                  <div className="d-flex align-items-center">
                    <Star size={18} className="text-warning" fill="#ffc107" />
                    <Star size={18} className="text-warning" fill="#ffc107" />
                    <Star size={18} className="text-warning" fill="#ffc107" />
                    <Star size={18} className="text-warning" fill="#ffc107" />
                    <Star size={18} className="text-warning" />
                  </div>
                  <p className="text-muted mb-0">120 reviews</p>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">5</span>
                    <div className="progress flex-grow-1" style={{ height: '8px' }}>
                      <div className="progress-bar bg-success" style={{ width: '70%' }}></div>
                    </div>
                    <span className="ms-2">70%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">4</span>
                    <div className="progress flex-grow-1" style={{ height: '8px' }}>
                      <div className="progress-bar bg-success" style={{ width: '20%' }}></div>
                    </div>
                    <span className="ms-2">20%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">3</span>
                    <div className="progress flex-grow-1" style={{ height: '8px' }}>
                      <div className="progress-bar bg-warning" style={{ width: '5%' }}></div>
                    </div>
                    <span className="ms-2">5%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">2</span>
                    <div className="progress flex-grow-1" style={{ height: '8px' }}>
                      <div className="progress-bar bg-danger" style={{ width: '3%' }}></div>
                    </div>
                    <span className="ms-2">3%</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-2">1</span>
                    <div className="progress flex-grow-1" style={{ height: '8px' }}>
                      <div className="progress-bar bg-danger" style={{ width: '2%' }}></div>
                    </div>
                    <span className="ms-2">2%</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h5>Customer Reviews</h5>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex mb-3">
                      <div className="flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80" alt="User" className="rounded-circle" width="50" height="50" />
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">Rahul Sharma</h6>
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center me-2">
                            <Star size={14} className="text-warning" fill="#ffc107" />
                            <Star size={14} className="text-warning" fill="#ffc107" />
                            <Star size={14} className="text-warning" fill="#ffc107" />
                            <Star size={14} className="text-warning" fill="#ffc107" />
                            <Star size={14} className="text-warning" fill="#ffc107" />
                          </div>
                          <span className="text-muted small">2 days ago</span>
                        </div>
                      </div>
                    </div>
                    <p>Great product! Exactly as described and arrived on time. The quality is excellent and I'm very satisfied with my purchase.</p>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex mb-3">
                      <div className="flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80" alt="User" className="rounded-circle" width="50" height="50" />
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">Priya Patel</h6>
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center me-2">
                            <Star size={14} className="text-warning" fill="#ffc107" />
                            <Star size={14} className="text-warning" fill="#ffc107" />
                            <Star size={14} className="text-warning" fill="#ffc107" />
                            <Star size={14} className="text-warning" fill="#ffc107" />
                            <Star size={14} className="text-warning" />
                          </div>
                          <span className="text-muted small">1 week ago</span>
                        </div>
                      </div>
                    </div>
                    <p>I'm happy with my purchase. The product is good quality and works as expected. Delivery was fast and packaging was secure.</p>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-primary">Load More Reviews</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="related-products mt-5">
        <h3 className="mb-4">Related Products</h3>
        <div className="row">
          {allProducts
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <div key={relatedProduct.id} className="col-lg-3 col-md-6">
                <ProductCard product={relatedProduct} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;