var chai = require('chai');
var expect = chai.expect;
var are_we_off = require( '../index.js' );

describe( 'are_we_off', function () {
  it( 'should return true if a Vox Holiday is passed in.', function () {
    expect( are_we_off( '2017-1-2' ) ).to.equal( true );
  } );
  it( 'should return true if a weekend is passed in.', function () {
    expect( are_we_off( '2017-1-7' ) ).to.equal( true );
  } );
  it( 'should return false if a Vox workday is passed in.', function () {
    expect( are_we_off( '2017-1-6' ) ).to.equal( false );
  } );
} );
