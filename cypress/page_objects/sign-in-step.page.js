export default class signInStepPage{
    constructor(){
        this.email = `#email`;
        this.password = `#passwd`;
        this.submitLogin = `#SubmitLogin`
    }
    signIn = function(email, password){
        cy.get(this.email).type(email)
          .get(this.password).type(password)
          .get(this.submitLogin).click()
    }
}