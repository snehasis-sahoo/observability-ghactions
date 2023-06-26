var assert = require('chai').assert;
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "all";

describe('BStackDemo Login fields - Multiple Hooks fail - before', function () {

    before(async () => {
        logger.info('before - BStack - Sign In - Basic components - Multiple Hooks fail - before')
    })

    before(async () => {
        logger.info('before fail - BStack - Sign In - Basic components - Multiple Hooks fail - before');
        assert.fail();
    })

    it('Username input field Displayed - Multiple Hooks fail - before', async () => {
        logger.info('Username input field Displayed - Multiple Hooks fail - before')
    });
});

describe('BStackDemo Login fields - Multiple Hooks fail - after', function () {

    after(async () => {
        logger.info('after - BStack - Sign In - Basic components - Multiple Hooks fail - after')
    })

    after(async () => {
        logger.info('after fail - BStack - Sign In - Basic components - Multiple Hooks fail - after');
        assert.fail();
    })

    it('Username input field Displayed - Multiple Hooks fail - after', async () => {
        logger.info('Username input field Displayed - Multiple Hooks fail - after')
    });
});

describe('BStackDemo Login fields - Multiple Hooks fail - beforeEach', function () {

    beforeEach(async () => {
        logger.info('afterEach - BStack - Sign In - Basic components - Multiple Hooks fail - beforeEach')
    })

    beforeEach(async () => {
        logger.info('afterEach fail - BStack - Sign In - Basic components - Multiple Hooks fail - beforeEach');
        assert.fail();
    })

    it('Username input field Displayed - Multiple Hooks fail - beforeEach', async () => {
        logger.info('Username input field Displayed - Multiple Hooks fail - beforeEach')
    });
});

describe('BStackDemo Login fields - Multiple Hooks fail - afterEach', function () {

    afterEach(async () => {
        logger.info('afterEach - BStack - Sign In - Basic components - Multiple Hooks fail - afterEach')
    })

    afterEach(async () => {
        logger.info('afterEach fail - BStack - Sign In - Basic components - Multiple Hooks fail - afterEach');
        assert.fail();
    })

    it('Username input field Displayed - Multiple Hooks fail - afterEach', async () => {
        logger.info('Username input field Displayed - Multiple Hooks fail - afterEach')
    });
});
