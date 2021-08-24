const IndustryExperienceYes = (state=0,action)=>{
    switch(action.type){
        case 'INDUSTRYEXPERINECEYES':
            return state = action.payload
         default:
            return state;
    }
}
export default IndustryExperienceYes