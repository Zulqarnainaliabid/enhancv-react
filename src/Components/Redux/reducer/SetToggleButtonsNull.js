const SetToggleButtonsNull = (state=false,action)=>{
    switch(action.type){
        case 'SETTOGGLEBUTTONNULL':
            return state+1;
        default:
            return state;
    }
}
export default SetToggleButtonsNull