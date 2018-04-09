const HeaderOfUserPage = require('./objectsOfUserPage/HeaderOfUserPage.js');
const PopUoBoxOfUserPage = require('./objectsOfUserPage/PopUpBoxOfUserPage.js');
const MainContentOfUserPage = require('./objectsOfUserPage/MainContentOfUserPage.js');

class UserPage{
    constructor(){
        this.header = new HeaderOfUserPage();
        this.popUp = new PopUoBoxOfUserPage();
        this.mainContent = new MainContentOfUserPage();
        this.isAuthenticated = false;
    }
}

module.exports = UserPage;