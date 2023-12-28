import _ from 'lodash';

const data = [
  {
    userName: 'Nico',
    role: 'Admin'
  },
  {
    userName: 'Adriana',
    role: 'Seller'
  },
  {
    userName: 'Fredy',
    role: 'Costumer'
  },
  {
    userName: 'Diana',
    role: 'Technical'
  },
  ,
  {
    userName: 'Luis',
    role: 'Technical'
  }
];

const rta = _.groupBy(data, (item) => item?.role);
console.log(rta);
