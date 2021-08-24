const TrainingYes = (state=0,action)=>{
    switch(action.type){
        case 'TRAININGYES':
            return state = action.payload
         default:
            return state;
    }
}
export default TrainingYes