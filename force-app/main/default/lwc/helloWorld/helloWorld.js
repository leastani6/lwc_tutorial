import { LightningElement,track} from 'lwc';

export default class HelloWorld extends LightningElement {

    @track dynamicReading="lea";
    

    greetingChangeHandler(event){

        this.dynamicReading=event.target.value;
    }
}