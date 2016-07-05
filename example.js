var are_we_off_today = require( './index.js' );

// Stop function if we are not working today
if ( are_we_off_today() ) { return; }

console.log( 'We are working today.' );
