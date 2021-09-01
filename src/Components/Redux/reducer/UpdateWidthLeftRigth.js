const UpdateWidthLeftRight = (state=null,action)=>{
    switch(action.type){
        case 'UPDATEWIDTHLEFTRIGTH':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateWidthLeftRight