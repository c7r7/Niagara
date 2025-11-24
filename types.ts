export enum ProductCategory {
  CLOTHING = 'Clothing',
  SOUVENIRS = 'Souvenirs',
  ACCESSORIES = 'Accessories',
  LOCAL_TREATS = 'Local Treats'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  image: string;
  popular?: boolean;
}

export interface Coupon {
  id: string;
  code: string;
  discount: string;
  description: string;
  expiry: string;
  color: string;
}

export interface AiRecommendationResponse {
  recommendationText: string;
  recommendedProductIds: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  relatedProducts?: Product[];
}