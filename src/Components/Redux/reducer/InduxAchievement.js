const InduxAchievement = (state=0,action)=>{
    switch(action.type){
        case 'INDUXACHIEVEMENT':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxAchievement