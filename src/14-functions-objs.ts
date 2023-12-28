(() => {
  const login = (email: string, password: string) => {
    console.log(email, password);
  }

  login('luis@upc.edu.co', '123456789');

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

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

  console.log(products);

})()
