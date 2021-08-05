const MonthFrom = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTMONTH':
            return state+1
         default:
            return state;
    }
}
export default MonthFrom