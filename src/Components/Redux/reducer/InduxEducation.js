const InduxEducation = (state=0,action)=>{
    switch(action.type){
        case 'INDUXEDUCATION':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxEducation