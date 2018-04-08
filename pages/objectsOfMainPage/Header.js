class Header {
    constructor() {
        this.image = element(by.xpath("//div[@class='header-logos']//img[@src='/36dee93c6c9748b0255ce1240d63c2b7.svg']"));
        this.loginBtn = element(By.xpath("//a[@href='/page/sign-in']"));
        this.signUpBtn = element(By.xpath("//a[@href='/page/sign-up']"));
        this.name = element(by.xpath("//span[@class='header-logo-text']"));
    }
}

module.exports = Header;