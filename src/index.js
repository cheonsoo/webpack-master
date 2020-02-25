import { fp } from 'lodash';
import './css/main.css';

const foo = 'hello~~~';

fp.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });

console.log(foo);
