(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product =  {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title:'Product 1',
    createdAt: new Date(1992,11,1),
    stock: 20
  });

  addProduct({
    title:'Product 2',
    createdAt: new Date(2023,11,1),
    stock: 20,
    size: 'M'
  });

  addProduct({
    title:'Product 3',
    createdAt: new Date(2023,11,1),
    stock: 20,
    size: 'M'
  });

  console.log(products);

})()
