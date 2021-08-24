const StrengthYes = (state=0,action)=>{
    switch(action.type){
        case 'STRENGTHYES':
            return state = action.payload
         default:
            return state;
    }
}
export default StrengthYes