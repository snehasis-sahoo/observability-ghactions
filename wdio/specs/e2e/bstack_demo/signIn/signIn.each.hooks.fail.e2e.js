import signInPage from '../../../../pageobjects/bstack-demo/signIn.page';
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "all";

describe('BStack - Login In - Basic components - Before each fail', () => {


    before(async () => {
        logger.info('before - BStack - Login In - Basic components - Before each fail')
        await signInPage.open()
    })

    beforeEach(async () => {
        logger.info('beforeEach - BStack - Login In - Basic components - Before each fail');
        await expect(signInPage.loginWrapper).toHaveTextContaining('Fail');
    })

    afterEach(function () {
        logger.info('teardown - BStack - Login In - Basic components - Before each fail');
    })

    describe('Browserstack Logo Wrapper - Fail -  Before each fail', function () {
        it('it - Logo Displayed -  Before each fail', async () => {
            logger.info('it - Logo Displayed');
            await expect(signInPage.browserstackLogo).toBeExisting();
        });

        it('Logo Text - Fail -  Before each fail', async () => {
            logger.info('it - Logo Text - Fail - Before each fail');
            await expect(signInPage.browserstackLogo).toHaveTextContaining('Fail');
        });

        it('Logo Text - Fail -  Before each fail', async () => {
            logger.info('it - Logo Text - Fai - Before each fail');
            await expect(signInPage.browserstackLogo).toHaveTextContaining('Fail');
        });

    });

    describe('BStackDemo Login fields -  Before each fail', function () {

        it('Username input field Displayed -  Before each fail', async () => {
            logger.info('it - Username input field Displayed');
            await expect(signInPage.userNameInput).toBeExisting();
        });

        it('Password input field Displayed -  Before each fail', async () => {
            logger.info('it - Password input field Displayed');
            await expect(signInPage.passwordInput).toBeExisting();
        });
    });

});

describe('BStack - Login fucntionality - After Each Fail', () => {

    before(async () => {
        logger.info('before - BStack - Login fucntionality - After Each Fail');
        await signInPage.open()
    })

    beforeEach(async () => {
        logger.info('beforeEach - BStack - Login fucntionality - After Each Fail');
    })

    afterEach(async () => {
        logger.info('afterEach - BStack - Login fucntionality - After Each Fail');
        await expect(signInPage.error).toBeExisting();
    })


    after(function () {
        logger.info('after - BStack - Login fucntionality - After Each Fail');
    })

    it('Login with empty credentials - Fail - After Each Fail', async () => {
        logger.info('it - Login with empty credentials - Fail - After Each Fail');
        await signInPage.login('', '');
        await expect(signInPage.error).toBeExisting();
        await expect(signInPage.error).toHaveTextContaining('Invalid Username');
    });

    it.skip('Login with invalid credentials - Skip - After Each Fail', async () => {
        logger.info('it - Login with invalid credentials - Skip');
        await signInPage.login('', '');
        await expect(signInPage.error).toBeExisting();
        await expect(signInPage.error).toHaveTextContaining('Invalid Username');
    });
});
