
import homePage from '../../../../pageobjects/bstack-demo/home.page';

describe('BStack - Homepage Basic components - Pending', function() {

    before(async () => {
        console.log('before - BStack - Homepage Basic components - Pending')
        await homePage.open()
    })

    beforeEach(async () => {
       console.log('beforeEach - BStack - Homepage Basic components - Pending')
    })

    after(function () {
        console.log('after - BStack - Homepage Basic components - Pending')
    })

    context('Browserstack Logo - Pending', function () {
        it('Logo Displayed - Pending');
        it('Logo Text - Pending');      
    });

    context('Browserstack Sign In Button - Pending', function () {
        specify('Sign In Button Displayed - Pending');
    });

});
