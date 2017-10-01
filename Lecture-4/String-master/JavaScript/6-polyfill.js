'use strict';

const name = 'Vadym Dzhanoyants';
console.log(name);

// Polyfill

if (!String.prototype.includes) {
  String.prototype.includes = function(s) {
    return this.indexOf(s) > -1;
  };
}

console.log(name.includes('sawt'));

// Bad practice

String.prototype.includesWord = function(s) {
  return (' ' + this + ' ').includes(' ' + s + ' ');
};

console.log(name.includesWord('Vadym'));
