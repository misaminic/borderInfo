// Resenje kako da isfiltriras gomilu nizova npr. i da ti vrati npr.
// string koji kucas u inputu ukoliko nadje takav u nizovima

// indexOf kada ne nadje vraca -1, zato svaki put kad nadje String, on ce vratiti neki veci broj
// i tako ce isfltrirati sve koje sadrze trazeni string

import _ from 'lodash';

const arr = ['misa', 'djole', 'jasna'];

const arr0 = ['countryEntered', 'Argentina'];

const a = arr0.includes('countryEntered', 'Argentina');

console.log(a);

// const proba = arr.filter((item) => item.indexOf('s') > -1);

// console.log(proba);

const arr1 = ['misa'];

const ny = arr1.includes('djole');

console.log(ny);

const obj1 = [
  {
    name: 'misa',
    age: 35,
  },

  {
    name: 'djole',
    age: 22,
  },

  {
    name: 'misa',
    age: 35,
    country: 'Serbia',
    selo: 'tulari',
  },
];

const obj2 = {
  name: 'misa',
  mesec: '',
  kale: null,
  pr: undefined,
  age: 33,
};

const obj3 = {
  name: 'misa',
  selo: 'tulari',
};

// Check if the values in an object are type of String, if yes return object with keys and values that are type of string

const func = (o) => {
  if (o.isString) {
    return o;
  }
};

const b = _.pickBy(obj2, func(obj2));

console.log(b);

// Tests if keys and values from the second argument(object) are equal to any object in the collection of objects (argument one)
// if yes it returns objects that have the same keys/values
// If there some keys/values exist in second argument but not in any of objects from argument one, it will return false
// all GIVEN/COMPARED properties must match in order to return object/true

const c = _.filter(obj1, obj3);

console.log(c);

const date = new Date();
const day = `${date.getDate()}`.padStart(2, '0');
const month = `${date.getMonth() + 1}`.padStart(2, '0');
const year = `${date.getFullYear()}`;
const postedTime = `${day}/${month}/${year}`;
console.log(typeof postedTime);

const pro = () => {
  let bla = new Date('2021-09-08T00:00:00');

  setTimeout(() => {
    let ra = new Date('2021-09-08T01:00:00');
    let difference = ra - bla;
    let getHowManyHoursPassed = 1000;
    let total = difference / getHowManyHoursPassed;
    total = total.toFixed(0);
    console.log(total);

    let dsa = +total;
    console.log(typeof dsa);
  }, 3000);
};

pro();

let f = 8.5 % 1;

console.log(Math.round(0.5));

// const Person = function (firstName, lastName) {
//   (this.firstName = firstName), (this.lastName = lastName);
// };

// const nova = new Person('misa', 'minic');

// console.log(nova);

// class CarCl {
//   constructor(make, speed) {
//     (this.make = make), (this.speed = speed);
//   }

//   brake(subtract) {
//     this.speed = this.speed - subtract;
//     console.log(`${this.make} is going ${this.speed}`);
//     return this;
//   }
// }

// class Evcl extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }
// }

// const afto = new Evcl('bmx', 100, 99);

// console.log(afto.brake(10).brake(20));

// console.log(afto);

// misac();
// acab();

// function misac () {
//   console.log('radi regularna funkcija');
// }

// const acab = () => {
//   console.log('radi arrow');
// };

let m = 'misa';

const arra = m.split('');
arra.reverse();
arra.join('');

console.log(arra);

const ob = {
  name: 'misa',
  last: 'minic',
  funk: function r() {
    const sve = this.name + this.last;
    console.log(sve);
  },
};

ob.funk();

const osoba = {
  name: 'peks',
  boje: ['plava', 'zuta'],
};

const osoba2 = { ...osoba };

osoba2.name = 'zika';
osoba2.boje.push('zelena');
console.log(osoba2);
console.log(osoba);

// Destructuring and switching values between variables

const arrDes = ['jabuka', 'kruska', 'jagoda', [4, 6]];

let [prvi, drugi, treci, [k, l]] = arrDes;
console.log(prvi, drugi, treci, k);

[prvi, treci] = [drugi, prvi];

console.log(prvi, treci, k);

const tipNiza = [...arrDes];

console.log(typeof tipNiza);

const hrana = { sendvic: 'mornarski', paradajz: 'slatki', sir: 'stari' };

const pice = { sok: 'gusti', caj: 'vruc', kafa: 'crna' };

const { sok, sendvic, caj, sir, ...rest } = { ...hrana, ...pice };

console.log(sok, sendvic, caj, sir, rest);

const bkw = null;

console.log(bkw === true);

console.log(0 || null);

const mape = new Map();

const time = 5;
mape.set('open', 10).set('closed', 10).set(true, 'radi').set(false, 'ne radi');

const nana = mape.get(time < mape.get('open'));

console.log(nana);

{
  const state = {
    name: 'Misa',
    age: 33,
    dobar: false,
    knjige: undefined,
    broj: null,
    krevet: 0,
    pesak: '',
  };

  const checkValueType = (EachPropertyInTheObject) => {
    if (EachPropertyInTheObject === '') {
      return false;
    } else if (
      typeof EachPropertyInTheObject === 'string' ||
      typeof EachPropertyInTheObject === 'number' ||
      typeof EachPropertyInTheObject === 'boolean'
    ) {
      return true;
    } else {
      return false;
    }
  };

  // takes
  const searchedTerms = _.pickBy(state, checkValueType);

  console.log(searchedTerms);
}
