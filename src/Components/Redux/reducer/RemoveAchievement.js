const RemoveAchievement = (state=0,action)=>{
    switch(action.type){
        case 'REMOVEACHIEVEMENT':
            return state+1;
        default:
            return state;
    }
}
export default RemoveAchievement