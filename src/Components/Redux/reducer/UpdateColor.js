const UpdateColor = (state=false,action)=>{
    switch(action.type){
        case 'UPDATECOLOR':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateColor