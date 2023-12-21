(()=>{

  let myDynamicVar: any;

  myDynamicVar = 100;

  myDynamicVar = true;

  myDynamicVar = {};

  myDynamicVar = 'Cualquier cosa!';

  myDynamicVar = 'Hola';

  const rta = (myDynamicVar as string).toUpperCase();

  console.log(rta);

  myDynamicVar = 1234;

  const rta2 = (<number>myDynamicVar).toFixed();

  console.log(rta2);

})();
