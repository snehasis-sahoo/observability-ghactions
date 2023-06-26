import { Given, Then, When, Step } from '@wdio/cucumber-framework';
import homePage from '../pageobjects/bstack-demo/home.page.js';

Given(/^I go to Bstack Demo Homepage$/, async () => {
    await homePage.open();
});

Then(/^the logo should be visible on the page$/, async() => {
    console.log('it - Logo Displayed')
    await expect(homePage.browserstackLogo).toBeExisting();
});

Then(/^the logo should be displayed on the page$/, async() => {
    console.log('it - Logo Displayed')
    await homePage.browserstackLogo.waitForDisplayed({ timeout: 5000 });
});


Then(/^the sign in should be visible on the page$/, async() => {
    console.log('it - Sign In Button Displayed')
    await expect(homePage.signInBtn).toBeExisting();
});

Then(/^the search result description should be visible on the page$/, async() => {
    await expect(homePage.searchResultDesc).toBeExisting();
});

Then(/^the sort option should be visible on the page$/, async() => {
    await expect(homePage.searchSortOption).toBeExisting();
});

Then(/^the sign in button text should be - ([a-zA-Z0-9., ]+)$/, async(btnText) => {
    await expect(homePage.signInBtn).toHaveTextContaining(btnText);
});

Then(/^the sign in button icon behaviour should be - ([a-zA-Z0-9., ]+)$/, async(behaviour) => {
    console.log('Sign In btn behaviour'+behaviour)
});

Then(/^the sign in button icon color should be - ([a-zA-Z0-9., ]+)$/, async(color) => {
    console.log('Sign In btn color'+color)
});

Then(/^the sign in button icon should be - ([a-zA-Z0-9., ]+)$/, async(iconSize) => {
    console.log('Sign In btn icon'+iconSize)
});

Then(/^the logo text should be - ([a-zA-Z0-9., ]+)$/, async(logoText) => {
    if (logoText == 'empty')
        logoText = '';
    await expect(homePage.browserstackLogo).toHaveTextContaining(logoText);
});

Then(/^the logo icon should be - ([a-zA-Z0-9., ]+)$/, async (iconSize) => {
    console.log('Logo icon'+iconSize)
});

Then(/^the search result description text should be - ([a-zA-Z0-9.,() ]+)$/, async (searchResultDesc) => {
    await expect(homePage.searchResultDesc).toHaveTextContaining(searchResultDesc);
});

Then(/^the search results should have ([0-9]+) products$/, async (productCount) => {
    console.log('Products'+productCount)    
});

Then(/^the search results should have brand - ([a-zA-Z0-9.,() ]+)$/, async(brand) => {
    console.log('Product brand'+brand)    
});

Then(/^the sort option description text should contain - ([a-zA-Z0-9.,() ]+)$/, async(sortText) => {
    expect(homePage.searchSortOption).toHaveTextContaining(sortText);
});
