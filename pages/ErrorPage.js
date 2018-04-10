class ErrorPage{
    constructor(){
        this.errorMessage = element(by.xpath("//div[@id='shop-not-found']//h1[@class='tc']"));
    }
}

module.exports = ErrorPage;