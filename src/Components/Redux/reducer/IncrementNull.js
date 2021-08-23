const IncrementNull = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDNULL':
            return state+1;
        default:
            return state;
    }
}
export default IncrementNull