# Vox Holidays

A simple node module that checks if it's a weekend or a Vox holiday. Useful for bots that you don't want posting messages on days we're off.

_Yes this will need to be updated yearly._

## Quick start

Install from github:

```bash
$ npm install --save https://github.com/yurivictor/vox-holidays.git
```

Add to your function:

```js
// Require the library
var are_we_off = require( 'vox-holidays' );

// Stop function if we are not working today
if ( are_we_off() ) { return; }

// Stop function if we are not working on a specific date
if ( are_we_off( '2017-1-2' ) ) { return; }

// Go on with whatever you want to do
console.log( 'We are working today.' );
```

## Example

To view the example, clone the repo and install the dependencies:

```bash
$ git clone git://github.com/yurivictor/vox-holidays.git
$ cd vox-holidays
$ npm install
```

Then run the example:

```bash
$ node example.js
```

## Tests

Tests are in `test` folder.

If you haven't already installed the dependencies:

```bash
$ npm install
```

Then run the tests:

```bash
$ npm test
```

## People

The original author is [@yurivictor](https://github.com/yurivictor).

## License

[BSD](LICENSE)

---

[back to top](#vox-holidays)
