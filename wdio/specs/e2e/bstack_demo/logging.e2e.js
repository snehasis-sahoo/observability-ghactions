import homePage from '../../../pageobjects/bstack-demo/home.page';
import signInAppErrorPage from '../../../pageobjects/bstack-demo/signIn.app.error.page';

var assert = require('chai').assert;
var webdriver = require('selenium-webdriver')
const { By } = require('selenium-webdriver')

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

var logger4js = log4js.getLogger();
logger4js.level = "all";

var driver;

describe('BStack - Homepage Basic Logging', function() {

    before(async () => {
        console.log('before - console log - BStack - BStack - Homepage Basic Logging')
        console.info('before - console info - BStack - BStack - Homepage Basic Logging')
        console.trace('before - console trace - BStack - BStack - Homepage Basic Logging')
        console.debug('before - console debug - BStack - BStack - Homepage Basic Logging')
        console.warn('before - console warn - BStack - BStack - Homepage Basic Logging')
        console.error('before - console error - BStack - BStack - Homepage Basic Logging')

        loggerWinston.info('before - winston info 1 - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('info', 'before - winston info 2- BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('debug', 'before - winston debug - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('verbose', 'before - winston verbose - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('silly', 'before - winston silly - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('http', 'before - winston http - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('warn', 'before - winston silly - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('error', 'before - winston error - BStack - BStack - Homepage Basic Logging')

        logger4js.info("before - 4js info - BStack - BStack - Homepage Basic Logging");
        logger4js.trace("before - 4js trace - BStack - BStack - Homepage Basic Logging");
        logger4js.debug("before - 4js debug - BStack - BStack - Homepage Basic Logging");
        logger4js.warn("before - 4js warn - BStack - BStack - Homepage Basic Logging");
        logger4js.error("before - 4js error - BStack - BStack - Homepage Basic Logging");
        logger4js.fatal("before - 4js fatal - BStack - BStack - Homepage Basic Logging");

        await browser.url("https://dinsaw.github.io/testsite/short.html?consoleLogCount=1&xhrCount=1");
        await homePage.open()
    })

    beforeEach(async () => {
        console.log('beforeEach - console log - BStack - BStack - Homepage Basic Logging')
        console.info('beforeEach - console info - BStack - BStack - Homepage Basic Logging')
        console.trace('beforeEach - console trace - BStack - BStack - Homepage Basic Logging')
        console.debug('beforeEach - console debug - BStack - BStack - Homepage Basic Logging')
        console.warn('beforeEach - console warn - BStack - BStack - Homepage Basic Logging')
        console.error('beforeEach - console error - BStack - BStack - Homepage Basic Logging')

        loggerWinston.info('beforeEach - winston info 1 - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('info', 'beforeEach - winston info 2- BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('debug', 'beforeEach - winston debug - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('verbose', 'beforeEach - winston verbose - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('silly', 'beforeEach - winston silly - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('http', 'beforeEach - winston http - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('warn', 'beforeEach - winston silly - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('error', 'beforeEach - winston error - BStack - BStack - Homepage Basic Logging')

        logger4js.info("beforeEach - 4js info - BStack - BStack - Homepage Basic Logging");
        logger4js.trace("beforeEach - 4js trace - BStack - BStack - Homepage Basic Logging");
        logger4js.debug("beforeEach - 4js debug - BStack - BStack - Homepage Basic Logging");
        logger4js.warn("beforeEach - 4js warn - BStack - BStack - Homepage Basic Logging");
        logger4js.error("beforeEach - 4js error - BStack - BStack - Homepage Basic Logging");
        logger4js.fatal("beforeEach - 4js fatal - BStack - BStack - Homepage Basic Logging");

        await browser.url("https://dinsaw.github.io/testsite/short.html?consoleLogCount=1&xhrCount=1");
        await homePage.open()

    })

    afterEach(async () => {
        console.log('afterEach - console log - BStack - BStack - Homepage Basic Logging')
        console.info('afterEach - console info - BStack - BStack - Homepage Basic Logging')
        console.trace('afterEach - console trace - BStack - BStack - Homepage Basic Logging')
        console.debug('afterEach - console debug - BStack - BStack - Homepage Basic Logging')
        console.warn('afterEach - console warn - BStack - BStack - Homepage Basic Logging')
        console.error('afterEach - console error - BStack - BStack - Homepage Basic Logging')

        loggerWinston.info('afterEach - winston info 1 - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('info', 'afterEach - winston info 2- BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('debug', 'afterEach - winston debug - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('verbose', 'afterEach - winston verbose - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('silly', 'afterEach - winston silly - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('http', 'afterEach - winston http - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('warn', 'afterEach - winston silly - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('error', 'afterEach - winston error - BStack - BStack - Homepage Basic Logging')

        logger4js.info("afterEach - 4js info - BStack - BStack - Homepage Basic Logging");
        logger4js.trace("afterEach - 4js trace - BStack - BStack - Homepage Basic Logging");
        logger4js.debug("afterEach - 4js debug - BStack - BStack - Homepage Basic Logging");
        logger4js.warn("afterEach - 4js warn - BStack - BStack - Homepage Basic Logging");
        logger4js.error("afterEach - 4js error - BStack - BStack - Homepage Basic Logging");
        logger4js.fatal("afterEach - 4js fatal - BStack - BStack - Homepage Basic Logging");

        await browser.url("https://dinsaw.github.io/testsite/short.html?consoleLogCount=1&xhrCount=1");
        await homePage.open()
     })
 

    after(async () => {
        console.log('after - console log - BStack - BStack - Homepage Basic Logging')
        console.info('after - console info - BStack - BStack - Homepage Basic Logging')
        console.trace('after - console trace - BStack - BStack - Homepage Basic Logging')
        console.debug('after - console debug - BStack - BStack - Homepage Basic Logging')
        console.warn('after - console warn - BStack - BStack - Homepage Basic Logging')
        console.error('after - console error - BStack - BStack - Homepage Basic Logging')

        loggerWinston.info('after - winston info 1 - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('info', 'after - winston info 2- BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('debug', 'after - winston debug - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('verbose', 'after - winston verbose - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('silly', 'after - winston silly - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('http', 'after - winston http - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('warn', 'after - winston warn - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('error', 'after - winston error - BStack - BStack - Homepage Basic Logging')

        logger4js.info("after - 4js info - BStack - BStack - Homepage Basic Logging");
        logger4js.trace("after - 4js trace - BStack - BStack - Homepage Basic Logging");
        logger4js.debug("after - 4js debug - BStack - BStack - Homepage Basic Logging");
        logger4js.warn("after - 4js warn - BStack - BStack - Homepage Basic Logging");
        logger4js.error("after - 4js error - BStack - BStack - Homepage Basic Logging");
        logger4js.fatal("after - 4js fatal - BStack - BStack - Homepage Basic Logging");

        await browser.url("https://dinsaw.github.io/testsite/short.html?consoleLogCount=1&xhrCount=1");
        await homePage.open()
    })

    context('BStack - Homepage Search Logging', function () {
        it('Search Result Desc Displayed It Logging', async () => {
            console.log('it - console log - BStack - BStack - Homepage Basic Logging')
            console.info('it - console info - BStack - BStack - Homepage Basic Logging')
            console.trace('it - console trace - BStack - BStack - Homepage Basic Logging')
            console.debug('it - console debug - BStack - BStack - Homepage Basic Logging')
            console.warn('it - console warn - BStack - BStack - Homepage Basic Logging')
            console.error('it - console error - BStack - BStack - Homepage Basic Logging')
    
            loggerWinston.info('it - winston info 1 - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('info', 'it - winston info 2- BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('debug', 'it - winston debug - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('verbose', 'it - winston verbose - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('silly', 'it - winston silly - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('http', 'it - winston http - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('warn', 'it - winston warn - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('error', 'it - winston error - BStack - BStack - Homepage Basic Logging')
    
            logger4js.info("it - 4js info - BStack - BStack - Homepage Basic Logging");
            logger4js.trace("it - 4js trace - BStack - BStack - Homepage Basic Logging");
            logger4js.debug("it - 4js debug - BStack - BStack - Homepage Basic Logging");
            logger4js.warn("it - 4js warn - BStack - BStack - Homepage Basic Logging");
            logger4js.error("it - 4js error - BStack - BStack - Homepage Basic Logging");
            logger4js.fatal("it - 4js fatal - BStack - BStack - Homepage Basic Logging");

            await signInAppErrorPage.open();
            signInAppErrorPage.login("demouser\t", "testingisfun99\t")
            await signInAppErrorPage.openErrorPage();

            await browser.url("https://dinsaw.github.io/testsite/short.html?consoleLogCount=1&xhrCount=1");
            await homePage.open()
        });
    
        specify('Search Result Desc Displayed Specify Logging - Fail', async () => {
            console.log('specify - console log - BStack - BStack - Homepage Basic Logging')
            console.info('specify - console info - BStack - BStack - Homepage Basic Logging')
            console.trace('specify - console trace - BStack - BStack - Homepage Basic Logging')
            console.debug('specify - console debug - BStack - BStack - Homepage Basic Logging')
            console.warn('specify - console warn - BStack - BStack - Homepage Basic Logging')
            console.error('specify - console error - BStack - BStack - Homepage Basic Logging')
    
            loggerWinston.info('specify - winston info 1 - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('info', 'specify - winston info 2- BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('debug', 'specify - winston debug - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('verbose', 'specify - winston verbose - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('silly', 'specify - winston silly - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('http', 'specify - winston http - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('warn', 'specify - winston warn - BStack - BStack - Homepage Basic Logging')
            loggerWinston.log('error', 'specify - winston error - BStack - BStack - Homepage Basic Logging')
    
            logger4js.info("specify - 4js info - BStack - BStack - Homepage Basic Logging");
            logger4js.trace("specify - 4js trace - BStack - BStack - Homepage Basic Logging");
            logger4js.debug("specify - 4js debug - BStack - BStack - Homepage Basic Logging");
            logger4js.warn("specify - 4js warn - BStack - BStack - Homepage Basic Logging");
            logger4js.error("specify - 4js error - BStack - BStack - Homepage Basic Logging");
            logger4js.fatal("specify - 4js fatal - BStack - BStack - Homepage Basic Logging");
    
            await signInAppErrorPage.openErrorPage();

            await browser.url("https://dinsaw.github.io/testsite/short.html?consoleLogCount=1&xhrCount=1");
            await homePage.open();
            await expect(homePage.browserstackLogo).toHaveTextContaining('Fail');
        });        
    });
});