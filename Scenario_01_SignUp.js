class LoginPage {
    constructor(browser) {
        this.browser = browser;
    }

    async signup() {
        await this.browser.url('https://ryze-staging.formedix.com/sign-in');
        await this.browser.$('[name="username"]').setValue('testteamtechtest');
        await this.browser.$('[name="password"]').setValue('Ryz3T3st!x3');
        await this.browser.$('button[type="submit"]').click();
        console.log('Signed in successfully');
    }
}

module.exports = LoginPage;
