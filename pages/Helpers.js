const LogInPage = require('./LogInPage.js');
const ShopifyPage = require('./ShopifyPage.js');
const UserPage = require('./UserPage.js');
const shopifyPage = new ShopifyPage();
const logInPage = new LogInPage();
const userPage = new UserPage();

class Helpers{
    static getTextFromElement(element){
        return element.getText();
    }

    static getSourceOfImage(img){
        return img.getAttribute('src');
    }

    static setValueIntoTextField(textField, value){
        textField.clear();
        textField.sendKeys(value);
    }

    static logInWithShopify(shopifyValue){
        this.setValueIntoTextField(logInPage.storeAddressTF, shopifyValue);
        logInPage.logInWithShopifyBtn.click();
        browser.wait(() => shopifyPage.emailTF.isPresent(), 10000, 'Field not found');
    }

    static logInUsingEmailAndPassword(email, password){
        this.setValueIntoTextField(shopifyPage.emailTF, email);
        this.setValueIntoTextField(shopifyPage.password, password);
        shopifyPage.logInBtn.click();
    }

    static closePopUpInUserPage(){
        browser.wait(() => userPage.popUp.popUpBox.isPresent(), 10000, 'Pop up not found');
        userPage.popUp.doNotShowAgainCheckbox.click();
        userPage.popUp.exploreTheDashboardBtn.click();
    }

    static logInOnlyWithEmailAndPassword(email, password){
        this.setValueIntoTextField(logInPage.emailAddressTF, email);
        this.setValueIntoTextField(logInPage.passwordTf, password);
        shopifyPage.logInBtn.click();
    }

    static chooseFunctionInAccountMenu(functionName){
        if(userPage.isAuthenticated === true) {
            userPage.header.nameOfUser.click();
            browser.wait(() => userPage.header.accountMenuFunctions.isPresent(), 10000, 'Menu not found');
            userPage.header.accountMenuFunctions.filter(function (elem) {
                return elem.getText().then(function (val) {
                    return val === functionName
                });
            }).click();
        }
    }
}

module.exports = Helpers;