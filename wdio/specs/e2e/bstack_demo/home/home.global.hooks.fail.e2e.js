import homePage from '../../../../pageobjects/bstack-demo/home.page';
const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};
const logger = winston.createLogger(logConfiguration);
  
describe('BStack - Homepage Basic components - Before Fail', function() {

    before(async () => {
        logger.info('before - BStack - Homepage Basic components - Before Fail')
        await homePage.open()
        await expect(homePage.browserstackLogo).toHaveTextContaining('Fail');
    })

    beforeEach(async () => {
       logger.info('beforeEach - BStack - Homepage Basic components - Before Fail')
    })

    after(function () {
        logger.info('after - BStack - Homepage Basic components - Before Fail')
    })

    context('Browserstack Logo - Before Fail', function () {
        it('Logo Displayed', async () => {
            logger.info('it - Logo Displayed - Before Fail')
            await expect(homePage.browserstackLogo).toBeExisting();
        });

        it('Logo Text', async () => {
            logger.info('it - Logo Text - Before Fail')
            await expect(homePage.browserstackLogo).toHaveTextContaining('');
        });
        
    });

    context('Browserstack Sign In Button - Before Fail', function () {
        it('Sign In Button Displayed', async () => {
            logger.info('it - Sign In Button Displayed - Before Fail')
            await expect(homePage.signInBtn).toBeExisting();
        });

        it('Sign In Button Text - Before Fail', async () => {
            logger.info('it - Sign In Button Text - Before Fail')
            await expect(homePage.signInBtn).toHaveTextContaining('Sign In');
        });
        
    });

});

describe('BStack - Homepage Search components - After fail', () => {

    before(async () => {
        logger.info('before - BStack - Homepage Search components - after fail ')
        await homePage.open()
    })

    beforeEach(async () => {
        logger.info('beforeEach - BStack - Homepage Search components - after fail')
    })

    after(async () => {
        logger.info('after - BStack - Homepage Search components - after fail')
        await expect(homePage.searchResultDesc).toHaveTextContaining('Fail');
    })

    context('Search Result', function () {
        it('Search Result Desc Displayed - after fail', async () => {
            logger.info('it - Search Result Desc Displayed - after fail')
            await expect(homePage.searchResultDesc).toBeExisting();
        });
    
        it('Search Result Desc Text - - after fail', async () => {
            logger.info('it - Search Result Desc Text - - after fail')
            await expect(homePage.searchResultDesc).toHaveTextContaining('');
        });

        it('Search Result Desc Text - Fail - after fail', async () => {
            logger.info('it - Search Result Desc Text - Fail - after fail')
            await expect(homePage.searchResultDesc).toHaveTextContaining('Fail');
        });

    });
});
