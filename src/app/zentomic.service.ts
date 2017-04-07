/**
 * link of RESTful service Setting
 * Coded by Tony Nguyen
 */

//const ZENTOMIC_SERVER = "http://localhost:9000";
const ZENTOMIC_SERVER = "https://zentomic-notifier-node.herokuapp.com";

export const ZENTOMIC_SERVICE = {
  login_local: ZENTOMIC_SERVER + "/Auth/Local?email={{email}}&password={{password}}",
  login_google: ZENTOMIC_SERVER + '/Auth/Google',
  sign_up: ZENTOMIC_SERVER + '/Agent/Create',
  SMS: ZENTOMIC_SERVER + '/SMS',
  create_notifier: ZENTOMIC_SERVER + '/Notifier/Create',
  get_notifier: ZENTOMIC_SERVER + '/Notifier/Read',
  checkin: ZENTOMIC_SERVER + '/Transaction/Checkin',
};


