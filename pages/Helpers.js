class Helpers{
    static getTextFromElement(element){
        return element.getText();
    }

    static getSourceOfImage(img){
        return img.getAttribute('src');
    }

    static setValueIntoTextField(textField, value){
        textField.sendKeys(value);
    }
}

module.exports = Helpers;