const CountingUpdateNumber = (state=0,action)=>{
    switch(action.type){
        case 'COUNTINGUPDATENUMBER':
            return state+1;
        default:
            return state;
    }
}
export default CountingUpdateNumber