const IncrementBackgroundColorSummary = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORSUMMARY':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorSummary