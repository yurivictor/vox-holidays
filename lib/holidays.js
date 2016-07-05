/*!
 * vox holidays
 */


/**
 * Expose `createApplication()`.
 */
exports = module.exports = createApplication;

/* Check if we are off today
 *
 * @return {bool} - True if we are working, false if we're off
 *
 *    var are_we_off_today = require( 'vox-holidays' );
 *    are_we_off_today();
 *    // => "false"
 *
 * @api public
 */
function createApplication() {
  var holidays = [
    '2016-1-1',
    '2016-1-18',
    '2016-5-30',
    '2016-7-4',
    '2016-9-5',
    '2016-11-24',
    '2016-11-25',
    '2016-12-24',
    '2016-12-25'
  ];
  function get_todays_date () {
    var date  = new Date();
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // January is 0
    var day   = date.getDate();
    return { 'date': date, 'today': year + '-' + month + '-' + day };
  };
  function are_we_off_today () {
    // get the date
    var date_object = get_todays_date();
    // get today
    var today = date_object['today'];
    // get the day
    var day = date_object['date'].getDay();
    // is it a holiday, saturday, or sunday?
    var is_it_a_holiday = ( holidays.indexOf( today ) > -1 );
    var is_it_saturday  = ( day == 6 );
    var is_it_sunday    = ( day == 0 );
    return is_it_a_holiday || is_it_saturday || is_it_sunday;
  };
  if ( are_we_off_today() ) { return true; } else { return false; };
};
