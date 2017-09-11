'use strict';

// const mssql = require('mssql')
// const config = require('./config/config')

var debug = require('debug')('mydebug:work');

setInterval(function () {
  console.log('aaa'); // eslint-disable-line no-console
  debug('doing some work @ %s —— %s', new Date().getTime(), 'with supervisor');
}, 2000);
//# sourceMappingURL=app.js.map