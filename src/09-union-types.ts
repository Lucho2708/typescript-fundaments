(() => {

  let userId: string | number;

  userId = 123;

  userId = '123sdsd';

  function greeting(myText: string | number) {
    if(typeof myText === 'string')
    {
      console.log(`string ${myText.toLocaleLowerCase()}`);

    }else{
      console.log(`number ${myText.toExponential(2)}`);

    }
  }

  greeting('asas');
  greeting(1234);

})();
