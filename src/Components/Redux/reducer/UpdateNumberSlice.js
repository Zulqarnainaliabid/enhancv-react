const UpdateNumberSlice = (state=5,action)=>{
    switch(action.type){
        case 'UPDATENUMBERSLICE':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateNumberSlice