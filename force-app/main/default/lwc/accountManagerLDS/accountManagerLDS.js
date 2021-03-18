import { LightningElement,track,wire } from 'lwc';
import {createRecord,getRecord} from 'lightning/uiRecordApi';

const fieldArray=['Account.Name', 'Account.Phone', 'Account.Website'];
export default class AccountManagerLDS extends LightningElement {
@track accountName;
@track accountPhone;
@track accountWeb;
@track recordId;

@wire(getRecord,{recordId:'$recordId',fields: fieldArray})
accountRecord;
accountNameHandler(event){

    this.accountName=event.target.value;
}

accountPhoneHandler(event){

    this.accountPhone=event.target.value;
}

accountWebHandler(event){

    this.accountWeb=event.target.value;
}
createAccount(){

  const fields = {'Name': this.accountName, 'Phone' : this.accountPhone, 'Website' : this.accountWeb};
  const recordInput = {apiName : 'Account', fields}  ;
  createRecord(recordInput).then(response =>{
console.log('Accpunt has been created', response.id);
this.recordId=response.id;
  }).catch(error =>{

console.error('error', error.body.message)

  })
}

get retrieveName(){
if(this.accountRecord.data){
    return this.accountRecord.data.fields.Name.value;
}
return undefined;

}
get retrieveUrl(){
    if(this.accountRecord.data){
        return this.accountRecord.data.fields.Website.value;
    }
    return undefined;
    
}
get retrievePhone(){
    if(this.accountRecord.data){
        return this.accountRecord.data.fields.Phone.value;
    }
    return undefined;
    
}
}