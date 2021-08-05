const IncrementState = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTSTATE':
            return state+1;
        default:
            return state;
    }
}
export default IncrementState