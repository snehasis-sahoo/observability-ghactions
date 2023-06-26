import signInPage from '../../../../pageobjects/bstack-demo/signIn.page';
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "all";


describe('BStackDemo Login fields - Multiple Hooks', function () {

    before(async () => {
        logger.info('before - BStack - Sign In - Basic components - Multiple Hooks')
    })

    before(async () => {
        logger.info('before - BStack - Sign In - Basic components - Multiple Hooks')
        await signInPage.open()
    })

    beforeEach(async () => {
        logger.info('beforeEach - BStack - Sign In - Basic components - Multiple Hooks')
    })

    beforeEach(async () => {
        logger.info('beforeEach - BStack - Sign In - Basic components - Multiple Hooks')
    })

    afterEach(async () => {
        logger.info('afterEach - BStack - Sign In - Basic components - Multiple Hooks')
    })

    afterEach(async () => {
        logger.info('afterEach - BStack - Sign In - Basic components - Multiple Hooks')
    })

    after(function () {
        logger.info('after - BStack - Sign In - Basic components - Multiple Hooks')
    })

    after(function () {
        logger.info('after - BStack - Sign In - Basic components - Multiple Hooks')
    })

    it('Username input field Displayed - Multiple Hooks', async () => {
        logger.info('it -Username input field Displayed - Multiple Hooks')
        await expect(signInPage.userNameInput).toBeExisting();
    });

    it('Password input field Displayed - Multiple Hooks', async () => {
        logger.info('it - Password input field Displayed - Multiple Hooks')
        await expect(signInPage.passwordInput).toBeExisting();
    });

});
