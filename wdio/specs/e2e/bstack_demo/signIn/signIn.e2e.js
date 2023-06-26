import signInPage from '../../../../pageobjects/bstack-demo/signIn.page';
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "all";

describe('BStack - Sign In - Basic components', () => {

    before(async () => {
        logger.info('before - BStack - Sign In - Basic components ')
        await signInPage.open()
    })

    beforeEach(async () => {
        logger.info('beforeEach - BStack - Sign In - Basic components ')
        console.log('beforeEach')
    })

    after(function () {
        logger.info('after - BStack - Sign In - Basic components ')
    })

    describe('Browserstack Logo Wrapper - Fail', function () {
        it('Logo Displayed - Fail', async () => {
            logger.error('it - Logo Displayed - Fail')
            await expect(signInPage.loginWrapper).not.toBeExisting();
        });

        it('Logo Text - Fail - 1', async () => {
            logger.error('it - Logo Text - Fail - 1')
            await expect(signInPage.loginWrapper).toHaveTextContaining('Fail');
        });

        it('Logo Text - Fail - 2', async () => {
            logger.error('it - Logo Text - Fail - 2')
            await expect(signInPage.loginWrapper).toHaveTextContaining('Fail');
        });

    });

    describe('BStackDemo Login fields', function () {

        it('Username input field Displayed', async () => {
            logger.info('it -Username input field Displayed')
            await expect(signInPage.userNameInput).toBeExisting();
        });

        it('Password input field Displayed', async () => {
            logger.info('it - Password input field Displayed')
            await expect(signInPage.passwordInput).toBeExisting();
        });

        it('Login Button Displayed', async () => {
            logger.info('it - Login Button Displayed')
            await expect(signInPage.loginBtn).toBeExisting();
        });

        it('Login Button Displayed - Fail', async () => {
            logger.warn('it - Login Button Displayed - Fail')
            await expect(signInPage.loginBtn).not.toBeExisting();
        });


    });

});

describe('BStack - Login fucntionality', function() {

    before(async () => {
        logger.info('before - BStack - Login fucntionality');
        await signInPage.open()
    })

    beforeEach(async () => {
        logger.info('beforeEach - BStack - Login fucntionality');
    })

    after(function () {
        logger.info('after - BStack - Login fucntionality');
    })

    this.retries(2);
    it('Login with empty credentials - Fail', async () => {
        logger.error('it - Login with empty credentials - Fail');
        await signInPage.login('', '');
        await expect(signInPage.error).toBeExisting();
        await expect(signInPage.error).toHaveTextContaining('Invalid Username');
    });

    it('Login with empty credentials - Flaky', async () => {
        logger.error('it - Login with empty credentials - Flaky');
        var results = ['pass', 'fail','pass', 'fail']
        var randomIndex = Math.floor(Math.random() * results.length)
        var result = results[randomIndex];
        var expectedLogText = 'Valid Username';
        if(result == 'fail')
            await expect(signInPage.error).toBeExisting();
        else
        await expect(signInPage.error).not.toBeExisting();
        });

    it.skip('Login with invalid credentials - Skip', async () => {
        await signInPage.login('', '');
        await expect(signInPage.error).toBeExisting();
        await expect(signInPage.error).toHaveTextContaining('Invalid Username');
    });

    it('Login with invalid credentials - Dynamic Skip', function(){
        logger.info('it - Login with invalid credentials - Skip');
        if(true)
            this.skip();
    });

});
