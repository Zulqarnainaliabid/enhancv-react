const InduxVolunteering = (state=0,action)=>{
    switch(action.type){
        case 'INDUXVOLUNTEERING':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxVolunteering