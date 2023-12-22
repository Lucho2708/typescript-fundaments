(() => {
  // let myNumber: number;
  // let myString: string;
  let myNull: null = null;
  let myUndefine: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 123;

  let myString: string | undefined = undefined;

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name.toLowerCase();

    } else {
      hello += 'nobody'
    }
    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('Luis');

  hi(null);

  hiV2('Luis');

  hiV2(null);

})()
