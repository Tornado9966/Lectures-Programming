'use strict';

// Object/Hash
const person = {
  name: 'Vadym',
  city: 'Kiev',
  born: 1999
};

console.log('Person name is: ' + person.name);
console.log('Person name is: ' + person['name']);

delete person.name;
console.dir({ person });

delete person['city'];
console.dir({ person });

// With getter
const person2 = {
  name: 'Marcus Aurelius',
  get city() {
    return 'Roma';
  },
  set city(value) {
    console.log('Marcus remains in Roma');
  }
};

person2.city = 'Kiev';

console.dir({ person2 });
