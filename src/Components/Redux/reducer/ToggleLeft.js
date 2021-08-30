const ToggleLeft = (state=false,action)=>{
    switch(action.type){
        case 'TOGGLELEFT':
            return state = action.payload
         default:
            return state;
    }
}
export default ToggleLeft