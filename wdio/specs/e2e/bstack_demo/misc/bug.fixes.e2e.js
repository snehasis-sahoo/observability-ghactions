
import homePage from '../../../../pageobjects/bstack-demo/home.page';
const assert = require('assert');

describe('BStack - Bug fixes - text logs', function () {
    it('Element isDisplayed - dashboard breaking in text logs', async () => {
        console.log('it - Element isDisplayed - dashboard breaking in text logs')
        await homePage.open();
        await homePage.browserstackLogo.waitForDisplayed({ timeout: 5000 });
    });
});

describe('BStack - Bug fixes - timestamp misalignment', function () {
    
    this.timeout(500000);
    beforeEach(async () => {
        console.log('beforeEach - Text Logs - timestamp misalignment')
        await homePage.open();
        await new Promise(r => setTimeout(r, 10000));
        await expect(homePage.browserstackLogo).toBeExisting();
        await homePage.open();
        await expect(homePage.browserstackLogo).toBeExisting();

     })
 

    it('Text Logs - timestamp misalignment', async () => {
        console.log('Text Logs - timestamp misalignment')
        await homePage.open();
        await homePage.browserstackLogo.waitForDisplayed({ timeout: 5000 });
    });
});


describe('BStack - bug fixes - Others', function () {
     it('Re-runs greater than 7', function(){
         this.retries(8);
         console.log('it - Re-runs greater than 7')
         homePage.open();
         assert.fail(); 
     });
 });
 
