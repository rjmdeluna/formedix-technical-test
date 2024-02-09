class SignOutPage {
    constructor(browser) {
        this.browser = browser;
    }

    async signOut() {
        await this.browser.$('.fdxicon-regular.fdx-user.fdx-main-nav-item-default').moveTo();
        await this.browser.$('.fdx-sub-nav-menu-item-desc=Sign out of ryze').click();
        console.log('Signed out successfully');
    }
}

module.exports = SignOutPage;
