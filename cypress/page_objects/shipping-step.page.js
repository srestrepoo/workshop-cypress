import nextStep from "./next-step.page";

export default class ShippingStepPage extends nextStep{
    constructor(){
        super()
        this.terms = `#cgv`;
    }
    checkTermsAndProceedToTheNextStep = function(){
        cy.get(this.terms).check().should('be.checked')
        this.proceedToTheNextStep();
    }

}