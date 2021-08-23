const IncrementBackgroundColorAchievement = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORACHIEVEMENT':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorAchievement