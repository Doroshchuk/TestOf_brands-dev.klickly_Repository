class Helpers{
    static getTextFromElement(element){
        return element.getText();
    }

    static getSourceOfImage(img){
        return img.getAttribute('src');
    }
}

module.exports = Helpers;