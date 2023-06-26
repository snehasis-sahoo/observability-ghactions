var assert = require('chai').assert;
var assert = require('chai').assert;
const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};
const logger = winston.createLogger(logConfiguration);

describe('BStack - Login In - Basic components - Before retry', () => {

    before(function() {
        this.retries(1);
        logger.info('before - BStack - Login In - Basic components - Before retry')
        assert.fail();
    })

    it('it - Before retry', function() {
        logger.info('it - Before retry');
    });

});

describe('BStack - Login In - Basic components - AferEach retry', () => {

    afterEach(function() {
        this.retries(1);
        logger.info('afterEach - BStack - Login In - Basic components - AfterEach retry')
        assert.fail();
    })

    it('it - AferEach retry', function() {
        logger.info('it - AferEach retry');
    });

});
