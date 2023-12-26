(()=>{
  const calcTotal= (prices: number[]) : string => {
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    })
    return total.toString();
  }
  // Cuando la funcion no retorna nada automaticamente el tipo cambia a Void
  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log('El total es ' + rta);
  }

  const rta = printTotal([1,2,3,4,5,6,7,8,9]);

  console.log(rta);

})();
