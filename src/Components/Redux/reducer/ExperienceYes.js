const ExperienceYes = (state=0,action)=>{
    switch(action.type){
        case 'EXPERIENCEYES':
            return state = action.payload
         default:
            return state;
    }
}
export default ExperienceYes