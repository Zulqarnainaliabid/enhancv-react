const TogglePages = (state=false,action)=>{
    switch(action.type){
        case 'TOGGLEPAGES':
            return state = action.payload
         default:
            return state;
    }
}
export default TogglePages