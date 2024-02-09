const { remote } = require('webdriverio');
const LoginPage = require('./Scenario_01_SignUp');
const RepositoryPage = require('./Scenario_02_NavigateRepository');
const SignOutPage = require('./Scenario_03_SignOut');

(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });

    try {
        const loginPage = new LoginPage(browser);
        const repositoryPage = new RepositoryPage(browser);
        const signOutPage = new SignOutPage(browser);

        await loginPage.signup();
        await repositoryPage.navigateToStudies();
        await signOutPage.signOut();

    } catch (error) {
        console.error('Error', error);
    }
})();
