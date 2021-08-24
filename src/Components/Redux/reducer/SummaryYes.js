const SummaryYes = (state=0,action)=>{
    switch(action.type){
        case 'SUMMARYYES':
            return state = action.payload
         default:
            return state;
    }
}
export default SummaryYes