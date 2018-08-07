const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const ACCESS_LOG_PATH = path.join(__dirname, '../../var/log/server/access.log');

// log to console
const dev = morgan('dev', {
  skip(req, res) { return res.statusCode < 400; },
});


// log all requests to access.log
const common = morgan('common', {
  stream: fs.createWriteStream(ACCESS_LOG_PATH, { flags: 'a' }),
});


module.exports.devLog = dev;
module.exports.commonLog = common;
