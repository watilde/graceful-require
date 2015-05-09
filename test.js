try {
  var require = require('./')('test_node_modules');

  var table = require('text-table');
  var t = table([
      [ 'master', '0123456789abcdef' ],
      [ 'staging', 'fedcba9876543210' ]
  ]);
  console.log(t);
} catch(e) {
  throw e;
}
