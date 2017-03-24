/**
 * link of RESTful service Setting
 * Code by Tony Nguyen
 */

//const ZENTOMIC_SERVER = "http://localhost:9000";
const ZENTOMIC_SERVER = "https://zentomic-notifier-node.herokuapp.com";

export const ZENTOMIC_SERVICE = {
  login_local: ZENTOMIC_SERVER + "/login-local?email={{email}}&password={{password}}",
  login_google: ZENTOMIC_SERVER + '/auth/google/callback',
  sign_up: ZENTOMIC_SERVER + '/signup-local',
  SMS: ZENTOMIC_SERVER + '/SMS',
};


