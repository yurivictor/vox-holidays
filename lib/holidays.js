/*!
 * Vox Holidays
 */

'use strict';

/**
 * Module dependencies
 */
const EventEmitter = require( 'events' ).EventEmitter;
const mixin        = require( 'merge-descriptors' );
const proto        = require( './application' );

/**
 * Expose `createApplication()`
 */
exports = module.exports = createApplication;

/**
 * Check holidays
 *
 * @return {bool} - True if we are working, false if we're off
 * @api public
 */
function createApplication() {
  let app = function ( next ) {
    next();
  };

  mixin( app, EventEmitter.prototype, false );
  mixin( app, proto, false );

  return app.init();
};

/**
 * Expose the prototype.
 */
exports.application = proto;
