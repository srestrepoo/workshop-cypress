import nextStep from "./next-step.page";

//.check().should('be.checked')
export default class ShippingStepPage extends nextStep{
    constructor(){
        super()
        this.terms = `#cgv`;
    }
    checkTermsAndProceed = function(){
        cy.get(this.terms).check().should('be.checked')
        this.proceed();
    }

}