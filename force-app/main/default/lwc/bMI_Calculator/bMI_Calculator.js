import { LightningElement,track } from 'lwc';
import {getBmi} from 'c/bMI';

export default class BMI_Calculator extends LightningElement {
//@track bmi;
// weight;
// height;
@track
bmiData = {

    weight : 0,
    height : 0,
    result : 0 
}
cardTitle='bmi calculator';

onWeightChange(event){
  //  this.weight=parseFloat(event.target.value);
  this.bmiData.weight=parseFloat(event.target.value);
}
onHeightChange(event){
    //this.height=parseFloat(event.target.value);
    this.bmiData.height=parseFloat(event.target.value);
}
bmiHandler(){

   // this.bmi=this.weight/(this.height*this.height);
 // try{ this.bmiData.result= this.bmiData.weight/( this.bmiData.height * this.bmiData.height)}
//  catch(error){
 //     this.bmiData.result=undefined;
 // }
 this.bmiData=getBmi(this.weight,this.height);
}
get BmiValue(){
    return `Your bmi is : ${this.bmiData.result}`};
}