const IncrementData = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTDATA':
            return state+1
         default:
            return state;
    }
}
export default IncrementData