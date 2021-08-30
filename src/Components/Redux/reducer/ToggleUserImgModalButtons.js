const ToggleUserImgModal = (state=false,action)=>{
    switch(action.type){
        case 'TOGGLEUSERIMGMODALBUTTONS':
            return state = action.payload
         default:
            return state;
    }
}
export default ToggleUserImgModal