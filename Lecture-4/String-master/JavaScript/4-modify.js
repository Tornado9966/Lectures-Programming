'use strict';

const name = 'Vadym Dzhanoyants';
console.log('name.split(\' \') =', name.split(' '));
console.log('name.replace(\'d\', \'D\') = ' + name.replace('d', 'D'));
console.log('name.replace(/a/g, \'A\') = ' + name.replace(/a/g, 'A'));
console.log('\'Ave \'.concat(name, \'!\') = ' + 'Ave '.concat(name, '!'));
