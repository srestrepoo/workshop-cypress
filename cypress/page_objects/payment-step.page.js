import nextStep from "./next-step.page";

export default class PaymentStepPage extends nextStep{
    constructor(){
        super()
        super.proceedButton = `#HOOK_PAYMENT > div:nth-child(1) > div > p > a`; 
    }
}
