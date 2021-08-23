const IncrementBackgroundColorSkill = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORSKILL':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorSkill