const MonthFromCrossIcon = (state=0,action)=>{
    switch(action.type){
        case 'UPDATEMONTHFROMCROSSICON':
            return state = action.payload
         default:
            return state;
    }
}
export default MonthFromCrossIcon