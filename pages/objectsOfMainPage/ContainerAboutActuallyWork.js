const Actions = require('./Actions.js');
const ActuallyWorkingBlock = require('./ActuallyWorkBlock');

class ContainerAboutActuallyWork extends Actions{
    constructor(){
        super('actually-working');
        this.callLink = element(by.xpath("//div[@class='banner-content__desc']//div[@class='actions']//a[@href='https://app.hubspot.com/meetings/taylor32']"));
        this.title = element(by.xpath("//div[@class='actually-working']//h2[@class='text-bold-light']"));
        this.leftBlock = new ActuallyWorkingBlock(1);
        this.middleBlock = new ActuallyWorkingBlock(2);
        this.rightBlock = new ActuallyWorkingBlock(3);
        this.mainText = element(by.xpath("//h2[@class='actually-working__label']"));
    }
}

module.exports = ContainerAboutActuallyWork;