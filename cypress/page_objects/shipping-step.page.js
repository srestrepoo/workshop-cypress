//.check().should('be.checked')
export default class ShippingStepPage{
    constructor(){
        this.terms = `#cgv`;
        this.proceedButton = `.cart_navigation > .button`;
    }
    proceed = function(){
        cy.get(this.terms).check().should('be.checked')
          .get(this.proceedButton).click()
    }

}