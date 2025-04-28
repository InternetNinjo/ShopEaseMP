export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand?: string;
  model?: string;
  color?: string;
  dimensions?: string;
  weight?: string;
  warranty?: string;
  createdAt: string;
  gallery?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
}