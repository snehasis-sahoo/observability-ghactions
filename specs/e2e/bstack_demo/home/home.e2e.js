
import homePage from '../../../../pageobjects/bstack-demo/home.page';

describe('BStack - Homepage Basic components', function() {

    before(async () => {
        console.log('before - BStack - Homepage Basic components')
        await homePage.open()
    })

    beforeEach(async () => {
       console.log('beforeEach - BStack - Homepage Basic components')
    })

    after(function () {
        console.log('after - BStack - Homepage Basic components')
    })

    context('Browserstack Logo', function () {
        it('Logo Displayed', async () => {
            console.log('it - Logo Displayed')
            await expect(homePage.browserstackLogo).toBeExisting();
        });

        it('Logo Text', async () => {
            console.log('it - Logo Text')
            await expect(homePage.browserstackLogo).toHaveTextContaining('');
        });

        it('Logo Text - Flaky', async () => {
            var results = ['pass', 'fail','pass', 'fail']
            var randomIndex = Math.floor(Math.random() * results.length)
            var result = results[randomIndex];
            var expectedLogText = '';
            if(result == 'fail')
                expectedLogText = 'Fail Flaky';

            console.warn('Log Text - Flaky')
            await expect(homePage.browserstackLogo).toHaveTextContaining(expectedLogText);
        });

        
    });

    context('Browserstack Sign In Button', function () {
        it('Sign In Button Displayed', async () => {
            console.log('it - Sign In Button Displayed')
            await expect(homePage.signInBtn).toBeExisting();
        });

        it('Sign In Button Text', async () => {
            console.log('it - Sign In Button Text')
            await expect(homePage.signInBtn).toHaveTextContaining('Sign In');
        });

        this.retries(2);
        it('Sign In Button Text - Flaky', async () => {
            var results = ['pass', 'fail','pass', 'fail']
            var randomIndex = Math.floor(Math.random() * results.length)
            var result = results[randomIndex];
            var expectedLogText = 'Sign In';
            if(result == 'fail')
                expectedLogText = 'Fail Flaky';    
                console.warn('it - Sign In Button Text')
                await expect(homePage.signInBtn).toHaveTextContaining(expectedLogText);
        });


    });

});

describe('BStack - Homepage Search components', function() {

    before(async () => {
        console.info('before - BStack - Homepage Search components')
        await homePage.open()
    })

    beforeEach(async () => {
       console.info('beforeEach - BStack - Homepage Search components')
    })

    after(function () {
        console.info('after - BStack - Homepage Search components')
    })

    context('Search Result', function () {
        specify('Search Result Desc Displayed', async () => {
            console.info('specify - Search Result Desc Displayed')
            await expect(homePage.searchResultDesc).toBeExisting();
        });
    
        specify('Search Result Desc Text', async () => {
            console.info('specify - Search Result Desc Text')
            await expect(homePage.searchResultDesc).toHaveTextContaining('');
        });

        specify('Search Result Desc Text - Fail', async () => {
            console.error('specify - Search Result Desc Text - Fail')
            await expect(homePage.searchResultDesc).toHaveTextContaining('Fail');
        });

        specify.skip('Search Result Desc Text - Skip', async () => {
            console.info('specify - Search Result Desc Text - Skip')
            await expect(homePage.searchResultDesc).toHaveTextContaining('');
        });

        this.retries(3);
        specify('Search Result Desc Text - Flaky', async () => {
            var results = ['pass', 'fail','pass', 'fail']
            var randomIndex = Math.floor(Math.random() * results.length)
            var result = results[randomIndex];
            var expectedLogText = '25 Product(s) found.';
            if(result == 'fail')
                expectedLogText = 'Fail Flaky';

            console.warn('specify - Search Result Desc Text - Flaky')
            await expect(homePage.searchResultDesc).toHaveTextContaining(expectedLogText);
        });


    });


    context('Sort Option', function () {
        specify('Sort Option Displayed', async () => {
            console.info('specify - Option Displayed')
            await expect(homePage.searchSortOption).toBeExisting();
        });

        specify.skip('Sort Option Displayed - Skip', async () => {
            console.info('specify - Sort Option Displayed - Skip')
            await expect(homePage.searchSortOption).toBeExisting();
        });
        
        specify('Sort Option Displayed - Dynamic Skip', function() {
            console.info('specify - Sort Option Displayed - Dynamic Skip')
            if(true)
                this.skip()
        });

        specify('Sort Option Text', async () => {
            console.info('specify - Sort Option Text')
            await expect(homePage.searchSortOption).toHaveTextContaining('Order by');
        });
    });

});
