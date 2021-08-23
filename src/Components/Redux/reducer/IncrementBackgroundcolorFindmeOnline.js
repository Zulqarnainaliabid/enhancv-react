const IncrementBackgroundColorFindMeOnline = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLOFINDMEONLINE':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorFindMeOnline