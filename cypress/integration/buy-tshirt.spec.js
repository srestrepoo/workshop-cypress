
/**
import MenuContentPage from '../page_objects/menu-content.page';
import ProductListPage from '../page_objects/product-list.page';
import ProductAddedModalPage from '../page_objects/product-added-modal.page';
import SummaryStepPage from '../page_objects/summary-step.page';
import SignInStepPage from '../page_objects/sign-in-step.page';
import AddressStepPage from '../page_objects/address-step.page';
import ShippingStepPage from '../page_objects/shipping-step.page';
import PaymentStepPage from '../page_objects/payment-step.page';
import BankPaymentPage from '../page_objects/bank-payment.page';

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const productAddedModalPage = new ProductAddedModalPage();
const summaryStepPage = new SummaryStepPage();
const signInStepPage = new SignInStepPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();
const bankPaymentPage = new BankPaymentPage();
const email = `aperdomobo@gmail.com`;
const password = `WorkshopProtractor`;
**/

describe('automation practice', () => {
    before(()=>{
        cy.visit('http://automationpractice.com/');
    })
    it('test',() => {
        // menuContentPage.goToTShirtMenu();
        // productListPage.selectProduct('Printed Dress');
        // cy.mockIndexReq();
        cy.selectProduct('Faded Short Sleeve T-shirts');
        // cy.wait(500);
        //productAddedModalPage.proceedToTheNextStep();
        //summaryStepPage.proceedToTheNextStep();
        //signInStepPage.signIn(email,password);
        //addressStepPage.proceedToTheNextStep();

        //shippingStepPage.checkTermsAndProceedToTheNextStep();
        //paymentStepPage.proceedToTheNextStep();
        // bankPaymentPage.proceedToTheNextStep();
        cy.paymentProcess();
    })
})
