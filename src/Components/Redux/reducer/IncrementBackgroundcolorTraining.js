const IncrementBackgroundColorTraining = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORTRAINING':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorTraining