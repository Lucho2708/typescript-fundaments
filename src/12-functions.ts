(()=>{

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAd: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createdAd,
      stock,
      size
    }
  }

  const createProductToJsonV2 = (
    title: string,
    createdAd: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAd,
      stock,
      size
    }
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'S');
  const product2 = createProductToJsonV2('P1', new Date(), 12);
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);

  console.log(product2);


})();
