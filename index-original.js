const _ = require('lodash');
const path = require('path');

let requiredProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
};

let environmentSettings = {
  env: process.env.NODE_ENV,
  root: path.normalize(`${__dirname}/../../`),
  port: process.env.PORT || 4100,
  ip: process.env.IP || '0.0.0.0',
  secrets: {
    key: 'ad01APt$#@!!!!#sFbS5#5s',
  },
  aesKeys: {
    encryption: [
      90, -100, 15, 74, -128, 113, 92, 31, 02, 111, 56, 36, 005, -15, -55, -91,
    ],
    decription: [
      -20, 99, 120, -48, 23, -13, 49, 16, 60, -123, 89, -99, 65, 1, -98, 113,
    ],
  },
  baseUrl: 'https://dev-be.innowayit.com/',
  clientUrl: 'https://dev-fe.innowayit.com/',
  authType: 'normal',
  activeDirectory: {
    url: 'ldap://35.171.23.230',
    baseDn: 'DC=ad,DC=innowayit,DC=com',
    domain: 'ad.innowayit.com',
  },
  // baseUrl : 'http://localhost:3000/',
  key: '',

  // dbConfig: {
  //   host: 'dbhost',
  //   user: 'dbuser',
  //   pw: 'dbpassword',
  //   db: 'dbname',
  //   dbType: 'mssql', //mssql
  // },

  dbConfig: {
    host: 'database-itbm2020.cecdpactmbib.us-east-1.rds.amazonaws.com',
    user: 'root2',
    pw: 'think123',
    db: 'mydb_dev',
    dbType: 'mssql',
  },
  specialChars: /[`!#$%@^&*()+\=\[\]{};'"\\|<>\/?~]/,

  rateLimit: {
    time: 1,
    noOfRequests: 5000,
    message: {
      errorCode: 1429,
      errorMessgae:
        'Too many request from this IP, please try again after an hour',
    },
  },

  fileConfiguration: {
    path: 'public/uploads/attachment',
  },
  batchConfiguration: {
    time: 2,
  },
};
module.exports = _.merge(
  environmentSettings,
  require('./' + process.env.NODE_ENV + '.js') || {}
);
