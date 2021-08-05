const UpdateIndex = (state=0,action)=>{
    switch(action.type){
        case 'UPDATEINDEX':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateIndex