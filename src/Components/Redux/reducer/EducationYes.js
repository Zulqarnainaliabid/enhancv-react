const EducationYes = (state=0,action)=>{
    switch(action.type){
        case 'EDUCATIONYES':
            return state = action.payload
         default:
            return state;
    }
}
export default EducationYes