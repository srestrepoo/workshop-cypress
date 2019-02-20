export default class MenuContentPage{
    constructor(){
        this.tShirtMenu = `#block_top_menu > ul > li:nth-child(2) > a`;
    }
    goToTShirtMenu = function(){
        cy.get(this.tShirtMenu).click();
    }
}
