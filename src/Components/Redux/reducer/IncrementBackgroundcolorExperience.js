const IncrementBackgroundColorExperience = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLOREXPERIENCE':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorExperience