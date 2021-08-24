const MytimeYes = (state=0,action)=>{
    switch(action.type){
        case 'MYTIMEYES':
            return state = action.payload
         default:
            return state;
    }
}
export default MytimeYes