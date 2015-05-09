# graceful-require

Give require some options

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install graceful-require --save
```
## Usage
Demo. Rename `node_modules` to `vendor`.
```
$ ls
index.js node_modules package.json

$ mv node_modules vendor
```

then, you can require any directory name you liked

```js
require = require('graceful-require')('vendor');
var table = require('text-table');
var t = table([
    [ 'master', '0123456789abcdef' ],
    [ 'staging', 'fedcba9876543210' ]
]);
console.log(t);
```

## Tests

```sh
npm install
npm test
```
