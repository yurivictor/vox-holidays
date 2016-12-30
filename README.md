# Vox Holidays

A simple node module that checks if it's a weekend or a Vox holiday. Useful for bots that you don't want posting messages on days we're off.

_Yes this will need to be updated yearly._

## How to use

Install from github:

```
npm install --save https://github.com/yurivictor/vox-holidays.git
```

Add to your function:

```js
// Require the library
var are_we_off = require( './index.js' );

// Stop function if we are not working today
if ( are_we_off() ) { return; }

// Stop function if we are not working on a specific date
if ( are_we_off( '2017-1-2' ) ) { return; }

// Go on with whatever you want to do
console.log( 'We are working today.' );
```
