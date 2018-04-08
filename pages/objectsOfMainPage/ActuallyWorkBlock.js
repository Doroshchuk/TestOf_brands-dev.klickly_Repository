class ActuallyWorkBlock{
    constructor(number){
        this.img = element(by.xpath("//div[@class='actually-working']//div[" + number + "]/img[@class='actually-working__img']"));
        this.title = element(by.xpath("//div[@class='actually-working']//div[" + number + "]/p[@class='text-bold-light']"));
        this.text = element(by.xpath("//div[@class='actually-working']//div[" + number + "]/p[@class='text-normal']"));
    }
}

module.exports = ActuallyWorkBlock;