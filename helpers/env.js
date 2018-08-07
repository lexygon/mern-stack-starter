require('dotenv').load();
const constants = require('constants');

if (process.env.NODE_ENV === constants.DEV) {
  require('dotenv').load({path: 'dev.env'})
} else if (process.env.NODE_ENV === constants.PROD) {
  require('dotenv').load({path: 'prod.env'})
}

module.exports = process.env.NODE_ENV;
