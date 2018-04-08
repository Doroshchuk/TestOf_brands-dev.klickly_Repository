class Actions {
    constructor(blockName){
        this.signUpFree = element(by.xpath("//div[@class='" + blockName + "']" + "//div[@class='actions']//button[@type='button']"));
        this.callLink = element(by.xpath("//div[@class='" + blockName + "']" + "//div[@class='actions']//a[@href='https://app.hubspot.com/meetings/taylor32']"));
    }
}

module.exports = Actions;