var confirm = require('..');
console.log(confirm)
confirm('Are you ok?', function() {
  console.log('Selected yes!');
}, function() {
  console.log('Selected no!');
}, {
  indent: 4
});

