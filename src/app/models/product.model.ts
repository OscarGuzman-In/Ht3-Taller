import { Category } from './category.enums';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: Category;
  image: string;
}