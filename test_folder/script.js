const { interpret, add, reverse } = require('../index.js');

console.log(interpret('Test Message'));

console.log(add(10, 20));               // numbers
console.log(add('10', '20'));           // numbers
console.log(add(10, 'abc'));            // not numbers

console.log(reverse('Hello'));          // string
console.log(reverse(123));              // not string