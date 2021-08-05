const UpdateNumber = (state=0,action)=>{
    switch(action.type){
        case 'UPDATENUMBER':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateNumber