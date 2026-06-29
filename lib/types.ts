export type CategoryId = 'pc' | 'sp' | 'tb' | 'au' | 'pr';

export interface SubCategory {
  code: string;
  name: string;
  description?: string;
}

export interface Category {
  id: CategoryId;
  code: string;
  name: string;
  nameEn: string;
  tagline?: string;
  description: string;
  subCategories: SubCategory[];
}

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  typeCode: string;
  category: CategoryId;
  subCategoryCode: string;
  name: string;
  brand: string;
  price: number;
  priceText?: string;
  releaseDate: string;
  imageUrl: string;
  description: string;
  specs: Spec[];
  tags: string[];
  featured?: boolean;
  // Optional fields for product detail pages
  summary?: string;
  features?: string[];
  pros?: string[];
  cons?: string[];
  purchaseLink?: string;
}
