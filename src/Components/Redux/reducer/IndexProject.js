const InduxProject = (state=0,action)=>{
    switch(action.type){
        case 'INDUXPROJECT':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxProject