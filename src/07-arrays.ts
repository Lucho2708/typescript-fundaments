(() => {
  let prices = [1, 2, 3, 4, 2, 4, 123, 'hola', true];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({})
  prices.push(12454);
  prices = [1, 2, 3];

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push('Mundo')

  mixed.push(22);

  mixed.push({});

  mixed.push([]);

  let numbers = [1, 2, 4, 5, 6, 7, 8];

  numbers.map(item => item * 2);

})()
