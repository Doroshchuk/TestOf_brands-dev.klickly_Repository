class Header {
    constructor() {
        // this.loginBtn = element(by.xpath("//a[@href='/page/sign-in']"));
        this.loginBtn = element(By.xpath("//a[@class='filled btn btn-base btn_transparent']"));
        // this.signUpBtn = element(by.xpath("//a[@href='/page/sign-up']"));
        this.signUpBtn = element(By.xpath("//a[@class='filled btn btn-base btn-base__cerise']"));
        this.image = element(by.css("img[src*='/36dee93c6c9748b0255ce1240d63c2b7.svg']"));
        this.name = element(by.xpath("//span[@class='header-logo-text']"));
    }

     getHeaderText(){
        return this.name.getText();
     }
}

module.exports = Header;