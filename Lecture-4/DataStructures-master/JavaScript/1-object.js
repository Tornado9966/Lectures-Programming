'use strict';

const person1 = {};
person1.name = 'Vadym';
person1.city = 'Kiev';
person1.born = 1999;

const person2 = new Object();
person2.name = 'Vadym';
person2.city = 'Kiev';
person2.born = 1999;

const person3 = {
  name: 'Vadym',
  city: 'Kiev',
  born: 1999
};

console.dir({ person1, person2, person3 });
