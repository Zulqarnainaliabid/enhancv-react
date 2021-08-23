const IncrementBackgroundColorStrength = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORSTRENGTH':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorStrength