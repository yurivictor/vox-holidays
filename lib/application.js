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
app.init = function init () {
  return this.are_we_off_today();
};

/**
 * Check if we are off today
 *
 * @return {bool} - True if we are working, false if we're off
 *
 *    are_we_off_today();
 *    // => false
 *
 * @api public
 */
app.are_we_off_today = function are_we_off_today () {
  // get the date
  let date_object = this.get_todays_date();
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
 * Get today's date
 *
 * @return {string} - Today's date (YYYY-M-D)
 *
 *    get_todays_date();
 *    // => "2017-1-1"
 *
 * @api public
 */
app.get_todays_date = function get_todays_date () {
  let date  = new Date();
  let year  = date.getFullYear();
  let month = date.getMonth() + 1; // January is 0
  let day   = date.getDate();
  return { 'date': date, 'today': year + '-' + month + '-' + day };
};
