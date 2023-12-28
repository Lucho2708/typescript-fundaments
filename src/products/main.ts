import { createProduct, calcStock, products } from "./product.service";

createProduct({
  name:'Product 1',
  createdAt: new Date(1992,11,1),
  stock: 20
});

createProduct({
  name:'Product 2',
  createdAt: new Date(2023,11,1),
  stock: 6,
  size: 'M'
});

createProduct({
  name:'Product 3',
  createdAt: new Date(2023,11,1),
  stock: 20,
  size: 'M'
});

console.log(products);
const total = calcStock();
console.log(`Total en Stock: ${total}`);


