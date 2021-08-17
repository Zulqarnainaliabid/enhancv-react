const UpdateAchievement = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTACHIEVEMENT':
            return state+1
         default:
            return state;
    }
}
export default UpdateAchievement