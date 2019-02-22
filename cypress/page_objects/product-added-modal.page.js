import nextStep from "./next-step.page";

export default class ProductAddedModalPage extends nextStep{
    constructor(){
        super()
        super.proceedToTheNextStepButton = `[style*="display: block;"] .button-container > a`;
    }
}
