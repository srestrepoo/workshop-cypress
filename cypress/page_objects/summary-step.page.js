export default class SummaryStepPage{
    constructor(){
        this.proceedButton = `.cart_navigation > .button`;
    }
    proceed = function(){
        cy.get(this.proceedButton).click()
    }
}