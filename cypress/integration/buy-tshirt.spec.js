const shirt1 = `Faded Short Sleeve T-shirts`;
const dress1 = `Printed Dress`;
const dress2 = `Printed Chiffon Dress`;

describe('automation practice', () => {
    describe('Test buy one Faded Short Sleeve T-shirts with bank wire', () => {
        before(()=>{
            cy.visit('/');
        })
        it('comprove name, amount and price',() => {
            //cy.mockIndexReq();
            cy.selectProduct(shirt1,3);
            cy.paymentProcess(1,'$18.51',shirt1);
        })
    })
    describe('Buy two items in the same categorie with bank wire', () => {
        before(()=>{
            cy.visit('/');
        })
        it('comprove name, amount and price',() => {
            cy.selectProduct(dress1,2);
            cy.selectProduct(dress2,2);
            cy.paymentProcess(2,'$44.40',dress1,dress2);
        })
    })
})

