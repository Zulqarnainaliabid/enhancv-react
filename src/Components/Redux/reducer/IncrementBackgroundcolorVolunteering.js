const IncrementBackgroundColorVolunteering = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORVOLUNTEERING':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorVolunteering