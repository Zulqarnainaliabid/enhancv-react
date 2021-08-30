const InduxSummary = (state=0,action)=>{
    switch(action.type){
        case 'INDUXSUMMARY':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxSummary