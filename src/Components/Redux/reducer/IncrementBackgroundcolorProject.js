const IncrementBackgroundColorProject = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORPROJECT':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorProject