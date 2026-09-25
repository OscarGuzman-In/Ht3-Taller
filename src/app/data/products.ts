import { Product } from '../models/product.model';
import { Category } from '../models/category.enums';

export const PRODUCTS: Product[] = [
  // Electronics
  {
    id: 1,
    name: 'Laptop Pro 15',
    price: 7499.99,
    category: Category.Electronics,
    image: 'assets/products/laptop-pro-15.jpg',
    stock: 8
  },
  {
    id: 2,
    name: 'Monitor UltraView 27"',
    price: 1899.99,
    category: Category.Electronics,
    image: 'assets/products/monitor-ultraview-27.jpg',
    stock: 12
  },
  {
    id: 3,
    name: 'Teclado Mecánico RGB',
    price: 549.99,
    category: Category.Electronics,
    image: 'assets/products/teclado-mecanico-rgb.jpg',
    stock: 15
  },
  {
    id: 4,
    name: 'Mouse Gaming X1',
    price: 299.99,
    category: Category.Electronics,
    image: 'assets/products/mouse-gaming-x1.jpg',
    stock: 20
  },
  {
    id: 5,
    name: 'Audífonos SoundMax',
    price: 699.99,
    category: Category.Electronics,
    image: 'assets/products/audifonos-soundmax.jpg',
    stock: 10
  },
  {
    id: 6,
    name: 'Smartphone Nova X',
    price: 3299.99,
    category: Category.Electronics,
    image: 'assets/products/smartphone-nova-x.jpg',
    stock: 7
  },

  // Clothing
  {
    id: 7,
    name: 'Sudadera Urban Tech',
    price: 349.99,
    category: Category.Clothing,
    image: 'assets/products/sudadera-urban-tech.jpg',
    stock: 18
  },
  {
    id: 8,
    name: 'Camiseta Tech Store',
    price: 179.99,
    category: Category.Clothing,
    image: 'assets/products/camiseta-tech-store.jpg',
    stock: 25
  },
  {
    id: 9,
    name: 'Chaqueta Wind Pro',
    price: 599.99,
    category: Category.Clothing,
    image: 'assets/products/chaqueta-wind-pro.jpg',
    stock: 10
  },
  {
    id: 10,
    name: 'Gorra Classic',
    price: 129.99,
    category: Category.Clothing,
    image: 'assets/products/gorra-classic.jpg',
    stock: 30
  },

  // Home Appliances
  {
    id: 11,
    name: 'Cafetera SmartBrew',
    price: 899.99,
    category: Category.HomeAppliances,
    image: 'assets/products/cafetera-smartbrew.jpg',
    stock: 8
  },
  {
    id: 12,
    name: 'Licuadora PowerMix',
    price: 649.99,
    category: Category.HomeAppliances,
    image: 'assets/products/licuadora-powermix.jpg',
    stock: 12
  },
  {
    id: 13,
    name: 'Freidora AirCook',
    price: 1099.99,
    category: Category.HomeAppliances,
    image: 'assets/products/freidora-aircook.jpg',
    stock: 6
  },
  {
    id: 14,
    name: 'Horno Eléctrico Compact',
    price: 1299.99,
    category: Category.HomeAppliances,
    image: 'assets/products/horno-compact.jpg',
    stock: 5
  },

  // Books
  {
    id: 15,
    name: 'Angular desde Cero',
    price: 299.99,
    category: Category.Books,
    image: 'assets/products/angular-desde-cero.jpg',
    stock: 14
  },
  {
    id: 16,
    name: 'JavaScript Moderno',
    price: 349.99,
    category: Category.Books,
    image: 'assets/products/javascript-moderno.jpg',
    stock: 11
  },
  {
    id: 17,
    name: 'Fundamentos de Programación',
    price: 279.99,
    category: Category.Books,
    image: 'assets/products/fundamentos-programacion.jpg',
    stock: 20
  },
  {
    id: 18,
    name: 'Diseño de Interfaces Web',
    price: 319.99,
    category: Category.Books,
    image: 'assets/products/diseno-interfaces.jpg',
    stock: 9
  },

  // Sports
  {
    id: 19,
    name: 'Balón Pro Match',
    price: 249.99,
    category: Category.sports,
    image: 'assets/products/balon-pro-match.jpg',
    stock: 16
  },
  {
    id: 20,
    name: 'Mochila Sport X',
    price: 399.99,
    category: Category.sports,
    image: 'assets/products/mochila-sport-x.jpg',
    stock: 12
  },
  {
    id: 21,
    name: 'Botella Hydrate Pro',
    price: 149.99,
    category: Category.sports,
    image: 'assets/products/botella-hydrate-pro.jpg',
    stock: 25
  },
  {
    id: 22,
    name: 'Guantes Training',
    price: 199.99,
    category: Category.sports,
    image: 'assets/products/guantes-training.jpg',
    stock: 18
  },

  // Beauty
  {
    id: 23,
    name: 'Secadora HairPro',
    price: 549.99,
    category: Category.Beauty,
    image: 'assets/products/secadora-hairpro.jpg',
    stock: 8
  },
  {
    id: 24,
    name: 'Plancha Ceramic Style',
    price: 449.99,
    category: Category.Beauty,
    image: 'assets/products/plancha-ceramic-style.jpg',
    stock: 10
  },
  {
    id: 25,
    name: 'Kit Beauty Essentials',
    price: 399.99,
    category: Category.Beauty,
    image: 'assets/products/kit-beauty-essentials.jpg',
    stock: 13
  },
  {
    id: 26,
    name: 'Espejo LED Compact',
    price: 299.99,
    category: Category.Beauty,
    image: 'assets/products/espejo-led.jpg',
    stock: 7
  },

  // Toys
  {
    id: 27,
    name: 'Drone Mini Explorer',
    price: 899.99,
    category: Category.Toys,
    image: 'assets/products/drone-mini-explorer.jpg',
    stock: 6
  },
  {
    id: 28,
    name: 'Robot SmartBot',
    price: 699.99,
    category: Category.Toys,
    image: 'assets/products/robot-smartbot.jpg',
    stock: 9
  },
  {
    id: 29,
    name: 'Set de Construcción Tech',
    price: 349.99,
    category: Category.Toys,
    image: 'assets/products/set-construccion-tech.jpg',
    stock: 15
  },
  {
    id: 30,
    name: 'Control Gamer Junior',
    price: 449.99,
    category: Category.Toys,
    image: 'assets/products/control-gamer-junior.jpg',
    stock: 11
  }
];