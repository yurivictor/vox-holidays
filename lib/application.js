/*!
 * Vox Holidays
 */

'use strict';

/**
 * Module dependencies
 */
const holidays = require( '../data/holidays.json' )

/**
 * Expose prototypes
 */
let app = exports = module.exports = {};

/**
 * Start the application
 *
 * @private
 */
app.init = function init ( date ) {
  app.date = date;
  return this.are_we_off();
};

/**
 * Check if we are off
 *
 * @return {bool} - True if we are working, false if we're off
 *
 *    are_we_off();
 *    // => false
 *
 * @api public
 */
app.are_we_off = function are_we_off () {
  // get the date
  let date_object = this.get_date_object();
  // get today
  let today = date_object['today'];
  // get the day
  let day = date_object['date'].getDay();
  // is it a holiday, saturday, or sunday?
  let is_it_a_holiday = ( holidays.indexOf( today ) > -1 );
  let is_it_saturday  = ( day == 6 );
  let is_it_sunday    = ( day == 0 );
  return is_it_a_holiday || is_it_saturday || is_it_sunday;
};

/**
 * Format a date or return today's date
 *
 * @return {object} - Formatted date data
 *
 *    get_date_object();
 *    // => { date: "Fri Dec 30 2016 13:49:07 GMT-0500 (EST)", today: "2016-12-30" }
 *
 * @api public
 */
app.get_date_object = function get_date_object () {
  if ( app.date !== 'undefined' ) {
    var date = new Date( app.date );
  } else {
    var date  = new Date();
  }
  let year  = date.getFullYear();
  let month = date.getMonth() + 1; // January is 0
  let day   = date.getDate();
  return { 'date': date, 'today': year + '-' + month + '-' + day };
};
