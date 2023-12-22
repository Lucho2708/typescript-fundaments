(() => {
  type UserID = string | number;
  let userId: UserID;

  //Tipos literales
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;

  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  function greeting(userId: UserID, size: Sizes)
  {
    if (typeof userId==='string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);

    }
  }

  greeting(111111, 'S');
  greeting('11111', 'L');

})();
