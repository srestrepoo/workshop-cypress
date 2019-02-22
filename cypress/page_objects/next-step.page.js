export default class nextStep{
    constructor(){
        this.proceedToTheNextStepButton = `.cart_navigation > .button`;
    }
    proceedToTheNextStep = function(){
        cy.get(this.proceedToTheNextStepButton).click()
    }
}