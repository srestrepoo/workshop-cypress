import nextStep from "./next-step.page";

export default class ProductAddedModalPage extends nextStep{
    constructor(){
        super()
        super.proceedButton = `[style*="display: block;"] .button-container > a`;
    }
}
