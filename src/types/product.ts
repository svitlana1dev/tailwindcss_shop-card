export interface Product {
  id: number;
  src: string;
  className: string;
  title: string;
  description: string;
  price: number;
}

export type ProductItem = {
  product: Product;
};

export type CartItem = {
  product: Product;
  qty: string;
  size: string;
};

export type CartItems = CartItem[];
