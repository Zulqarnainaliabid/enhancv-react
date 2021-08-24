const FindmeOnlineYes = (state=0,action)=>{
    switch(action.type){
        case 'FINDMEONLINEYES':
            return state = action.payload
         default:
            return state;
    }
}
export default FindmeOnlineYes