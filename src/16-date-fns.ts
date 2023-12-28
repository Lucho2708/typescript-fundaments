import {subDays, format} from 'date-fns'

const date = new Date (1992, 7, 27);
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
