export default class AddressStepPage{
    constructor(){
        this.proceedButton = `.cart_navigation > .button`;
    }
    proceed = function(){
        cy.get(this.proceedButton).click()
    }
}

