const IncrementBackgroundColorPassion = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORPASSION':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorPassion