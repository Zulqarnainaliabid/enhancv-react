const InduxExperience = (state=0,action)=>{
    switch(action.type){
        case 'INDUXEXPERIENCE':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxExperience