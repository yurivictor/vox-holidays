// Require the library
var are_we_off = require( './index.js' );

// Stop function if we are not working today
if ( are_we_off() ) { return; }

// Stop function if we are not working on a specific date
if ( are_we_off( '2017-1-2' ) ) { return; }

// Go on with whatever you want to do
console.log( 'We are working today.' );
