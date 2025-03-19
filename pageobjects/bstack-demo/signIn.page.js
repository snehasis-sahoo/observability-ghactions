import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignIn extends Page {
    /**
     * define selectors using getter methods
     */

    get loginWrapper() {
        return $('.Modal_modal__3I0HK');
    }

    get userNameInput() {
        return $('#username');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginBtn() {
        return $('#login-btn');
    }

    get error() {
        return $('.api-error');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.userNameInput.waitForExist({timeout: 1000})
        await this.userNameInput.setValue(username);
        await this.passwordInput.waitForExist({timeout: 1000})
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('signin');
    }
}

export default new SignIn();
