import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get browserstackLogo() {
        return $('.Navbar_logo__26S5Y');
        // return $('.Navbar_logo__26Y');

    }

    get signInBtn() {
        return $('#signin');
    }

    get searchResultDesc() {
        return $('.products-found');
    }

    get searchSortOption() {
        return $('.sort');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new HomePage();
