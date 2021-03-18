({
    doInit : function(component, event, helper) {
       component.set("v.meetingRoomInfo", [
            {roomname:'A-01', roomCapacity:'12'},
            {roomname:'A-02', roomCapacity:'1'},
            {roomname:'A-03', roomCapacity:'10'},
            {roomname:'A-04', roomCapacity:'2'},
            {roomname:'A-05', roomCapacity:'6'}
        ]);
    },
    handleTileClick: function(component, event, helper) {

component.set("v.selectedRoomInfo", event.getParam('roomname'));

    }
})
