import { LightningElement,track } from 'lwc';

export default class MeetingRooms extends LightningElement {

@track selectedMeetingRoom;
    meetingRoomsInfo=[
        {roomname:'A-01', roomCapacity:'12'},
        {roomname:'A-02', roomCapacity:'1'},
        {roomname:'A-03', roomCapacity:'10'},
        {roomname:'A-04', roomCapacity:'2'},
        {roomname:'A-05', roomCapacity:'6'}
    ];

    onTileSelectHandler(event){


        const meetingRoomInfp = event.detail;
        this.selectedMeetingRoom=this.meetingRoomsInfo.roomname;
}

constructor(){

super();
    this.template.addEventListener('tileClick',this.onTileSelectHandler.bind(this));
}
}