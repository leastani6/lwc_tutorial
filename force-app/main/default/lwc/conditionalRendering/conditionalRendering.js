import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

@track isVisible=false;
@track cityList=['New York','Tirana','Los Angelos','Las Vegas'];
showDivHandler(event){

    this.isVisible = event.target.checked;
}

}