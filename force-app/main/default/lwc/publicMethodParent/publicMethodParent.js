import { LightningElement,track } from 'lwc';

export default class PublicMethodParent extends LightningElement {


    @track value;

    checkboxSelectHandler(){
const childComp=this.template.querySelector('c-public-method-child');
const returnMessage= childComp.selectCheckBox(this.value);
console.log(returnMessage);
    }
    onInputChangeHandler(event){

this.value=event.target.value;

    }
}