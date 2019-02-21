export default class nextStep{
    constructor(){
        this.proceedButton = `.cart_navigation > .button`;
    }
    proceed = function(){
        cy.get(this.proceedButton).click()
    }
}