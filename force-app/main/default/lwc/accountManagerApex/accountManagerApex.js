import { LightningElement, wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountManager.getAccounts';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class AccountManagerApex extends LightningElement {
 
 
//     @wire(getAccounts)
// accounts;

@track numberOfRecords;
@track accounts;
numberOfAccountChangeHandler(event){

    this.numberOfRecords=event.target.value;
}


get responseReceived(){

    if(this.accounts){
return true;
    }
    return false;
}

getAccounts(){

    getAccounts({numberOfRecords: this.numberOfRecords}).then(response => {
        this.accounts=response;
        const toastEvent = new ShowToastEvent({

title: 'Account loaded',
message : this.numberOfRecords + ' Accounts fetched from server',
variant : 'success'});
        this.dispatchEvent(toastEvent);

    }).catch(error=>{
console.error('error', error.body.message);
const toastEvent = new ShowToastEvent({

    title: 'Account error',
    message : error.body.message,
    variant : 'error'});
            this.dispatchEvent(toastEvent);
    
    })
}
}