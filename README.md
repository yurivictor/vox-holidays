# Vox Holidays

A simple node module that checks if we are working today. Checks if it's a weekend or a Vox holiday.

_Yes this will need to be updated yearly._

## How to use

Install from github:

```
npm install --save https://github.com/yurivictor/vox-holidays.git
```

Add to your function:

```js
// Require the library
var we_are_off_today = require( 'vox-holidays' );

// Stop function if we are not working today
if ( we_are_off_today() ) { return; }

// Go on with whatever you want to do
console.log( 'We are working today.' );
```
