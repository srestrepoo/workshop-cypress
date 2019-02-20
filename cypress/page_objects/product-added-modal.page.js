export default class ProductAddedModalPage{
    constructor(){
        this.confirmAddedButton = `[style*="display: block;"] .button-container > a`;
    }
    confirmAdded = function(){
        cy.get(this.confirmAddedButton).click();
    }
}
