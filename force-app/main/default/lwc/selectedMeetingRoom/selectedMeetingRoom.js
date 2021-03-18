import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class SelectedMeetingRoom extends LightningElement {

    @track SelectedMeetingRoom={};
    @wire(CurrentPageReference) pageRef;
    connectedCallback() {
        registerListener('pubsubTileClick', this.onMeetingroomSelectHandler, this);


    }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }
    onMeetingroomSelectHandler(payload) {

        this.SelectedMeetingRoom = payload;
    }
}