const ToggleRearrangebuttons = (state=false,action)=>{
    switch(action.type){
        case 'TOGGLEREARRANGEBUTTONS':
            return state = action.payload
         default:
            return state;
    }
}
export default ToggleRearrangebuttons