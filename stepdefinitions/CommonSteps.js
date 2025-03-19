import { assert } from 'chai';
import { Given, Then, When} from '@wdio/cucumber-framework';
const winston = require('winston');

const logConfiguration = {
    'transports': [
        new (winston.transports.Console)({
            level: 'silly',
            json: true        
        })
    ]
};
const loggerWinston = winston.createLogger(logConfiguration);

var log4js = require("log4js");
log4js.configure({
    appenders: { app: { type: 'file', filename: 'app.log' } },
    categories: { default: { appenders: ['app'], level: 'all' } }
  });
var logger4js = log4js.getLogger();
logger4js.level = "all";

Given(/^I check if page is loaded properly$/, () => {
    console.log('verifyPageLoaded')
});

Given(/^Refresh Page$/, () => {
    console.log("refreshPage");
    let min = 1;
    let max = 10;
    let i = Math.random() * (max - min) + min;
    if (i > 5)
        assert.fail();
});


Given(/^Download PDF$/, () => {
    console.log("downloadPDF");
});

Given(/^Verify if PDF is downloaded properly$/, () => {
    console.log("verifyPDFDownload");
    assert.fail();
});

Given(/^Retrieve User credentials via service$/, () => {
    console.log("getUserCreds");
});

Given(/^Create account via service with credentials - ([a-zA-Z0-9.,() ]+) and ([a-zA-Z0-9.,() ]+)$/, (username, password) => {
    console.log("createUserAccount"+username+password);
});

Given(/^Retrieve user token via service$/, () => {
    console.log("getUserToken");
});

Given(/^Refresh user token via service$/, () => {
    console.log("refreshUserToken");
    assert.fail();
});

Given(/^Delete account via service$/, () => {
    console.log("deleteAccount");
    return 'pending';
    // throw new PendingException("yet to be created");
});

Given(/^Change ([a-zA-Z0-9.,() ]+) via service$/, (password) => {
    console.log("changePassword: "+password);
});

Given(/^Change password via ([a-zA-Z0-9.,() ]+)$/, (service) => {
    console.log("changePassword: "+service);
});

Given(/^Change user group$/, () => {
    console.log("changeUserGroup");
    let min = 1;
    let max = 10;
    let i = Math.random() * (max - min) + min;
    if (i > 5)
        assert.fail();
});

Given(/^Verify user address should be$/, (docStringAddress) => {
    console.log("verifyUserAddress"+docStringAddress);
});

Given(/^Verify user plan list$/, (table) => {
    console.log("verifyUserPlanList"+table.rowsHash());
});

Given(/^Verify all API logging - ([0-9]+)$/, (count) => {
    console.log('api - console log - logging '+count)
    console.info('api - console info - logging '+count)
    console.trace('api - console trace - logging '+count)
    console.debug('api - console debug - logging '+count)
    console.warn('api - console warn - logging '+count)
    console.error('api - console error - logging '+count)

    loggerWinston.info('api - winston info 1 - logging '+count)
    loggerWinston.log('info', 'api - winston info 2 - logging '+count)
    loggerWinston.log('debug', 'api - winston debug - logging '+count)
    loggerWinston.log('verbose', 'api - winston verbose - logging '+count)
    loggerWinston.log('silly', 'api - winston silly - logging '+count)
    loggerWinston.log('http', 'api - winston http - logging '+count)
    loggerWinston.log('warn', 'api - winston warn - logging '+count)
    loggerWinston.log('error', 'api - winston error - logging '+count)

    logger4js.info('api - 4js info - logging '+count);
    logger4js.trace('api - 4js trace - logging '+count);
    logger4js.debug('api - 4js debug - logging '+count);
    logger4js.warn('api - 4js warn - logging '+count);
    logger4js.error('api - 4js error - logging '+count);
    logger4js.fatal('api - 4js fatal - logging '+count);
});
