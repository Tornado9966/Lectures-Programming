'use strict';

const person = {
  name: 'Vadym',
  city: 'Kiev',
  born: 1999
};

if ('name' in person) {
  console.log('Person name is: ' + person.name);
}

for (const key in person) {
  const value = person[key];
  console.dir({ key, value });
}

// Variables to hash
const name = 'Marcus Aurelius';
const city = 'Rome';

// Old style
const person1 = { name: name, city: city };

// New style
const person2 = { name, city };

// Dynamic field name
const fieldName = 'city';
const fieldValue = 'Roma';
const person3 = {
  name: 'Marcus Aurelius',
  [fieldName]: fieldValue
};

// Expression in field name
const person4 = {
  name: 'Marcus Aurelius',
  ['city' + 'Born']: fieldValue
};

// Function in field name
function fn(s) {
  return s + 'Born';
}

const person5 = {
  name: 'Marcus Aurelius',
  [fn('city')]: fieldValue
};
