const VolunteeringYes = (state=0,action)=>{
    switch(action.type){
        case 'VOLUNTEERINFYES':
            return state = action.payload
         default:
            return state;
    }
}
export default VolunteeringYes