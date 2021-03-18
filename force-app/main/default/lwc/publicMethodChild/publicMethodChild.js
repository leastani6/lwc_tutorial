import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['red'];
    options = [
        { label: 'Red Marker', value: 'red' },
        { label: 'Blue Marker', value: 'blue' },
        { label: 'Green Marker', value: 'green' }];
 
@api
    selectCheckBox(checkBoxValue) {

        const selectedCheckbox =  this.options.find(
 checkbox =>{
        return checkBoxValue ===checkbox.value;
    })

    if(selectedCheckbox){
        this.value=selectedCheckbox.value;
        return "succesfully checked";
    }
    else{
        return "no checkbox found";
    }
}

    }


