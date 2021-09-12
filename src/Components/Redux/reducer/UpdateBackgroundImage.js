const UpdateBackGroundImage = (state=null,action)=>{
    switch(action.type){
        case 'UPDATEBACKGROUNDIMAGE':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateBackGroundImage