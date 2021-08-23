const IncrementBackgroundColorIndusteryExperience = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORINDUSTERYEXPERIENCE':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorIndusteryExperience