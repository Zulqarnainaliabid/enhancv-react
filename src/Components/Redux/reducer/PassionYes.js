const PassionYes = (state=0,action)=>{
    switch(action.type){
        case 'PASSIONYES':
            return state = action.payload
         default:
            return state;
    }
}
export default PassionYes