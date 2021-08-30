const InduxTraining = (state=0,action)=>{
    switch(action.type){
        case 'INDUXTRAINING':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxTraining