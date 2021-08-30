const InduxIndestryExperience = (state=0,action)=>{
    switch(action.type){
        case 'INDUXFINDUSTRYEXPERIENCE':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxIndestryExperience