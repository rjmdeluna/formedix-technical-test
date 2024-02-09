class RepositoryPage {
    constructor(browser) {
        this.browser = browser;
    }

    async navigateToStudies() {
        await this.browser.$('.fdx-main-nav-item-label=Repository').moveTo();
        await this.browser.$('.fdx-sub-nav-menu-item-label=Studies').click();
        await this.browser.$('.fdxicon-regular.fdx-menu.dropdown-toggle.icon').click();
        await this.browser.$('#fdxMdbContainerTableItem0View').click();
        await this.browser.$('#ViewAssetGroupdataAcquisition').click();
        await this.browser.$('#FORMTypeView').click();
        console.log('Navigate Repository Studies Successfully');

        // Generate random number to be used updating description & Perform user action
        function generateRandomNumber() {
            return Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        }
        const randomTestString = `TESTECH00${generateRandomNumber()}`;

        await this.browser.$('.fdx-ellipsis=Medical History Medical').click();;
        await this.browser.$('.fdxicon-regular.fdx-edit').click();
        await this.browser.$('#editPropsAddEntrydescription').click();

        await this.browser.$('#assetLocaleEditTextTextareadescription').setValue(randomTestString);
        await this.browser.$('#localeInputdescription').setValue(randomTestString);
        await this.browser.$('#saveAsset').click();
        console.log('Medical History Updated Successfully');

        // Validate if the form description matches the generated test string
        const formDescriptionElement = await this.browser.$('#formDescription');
        const formDescriptionText = await formDescriptionElement.getText();

        if (formDescriptionText === randomTestString) {
            console.log('Validation passed: The form description matches the generated test string.');
        } else {
            console.error('Validation failed: The form description does not match the generated test string.');
            await this.browser.deleteSession();
            return;
        }
    }
}

module.exports = RepositoryPage;
