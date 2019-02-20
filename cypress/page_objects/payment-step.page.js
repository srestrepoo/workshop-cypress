export default class PaymentStepPage{
    constructor(){
        this.proceedButton = `#HOOK_PAYMENT > div:nth-child(1) > div > p > a`; 
    }
    proceed = function(){
        cy.get(this.proceedButton).click()
    }
}
