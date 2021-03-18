import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationExample extends NavigationMixin(LightningElement) {

    openPage(){

this[NavigationMixin.Navigate]({


    type: 'standard__webPage',
    attributes: {
        url: 'https://www.google.com'
    }
});

    }
    openAccount(){


        this[NavigationMixin.Navigate]({


            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });

    }
    CreateContact(){
        this[NavigationMixin.Navigate]({


            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });


    }


}