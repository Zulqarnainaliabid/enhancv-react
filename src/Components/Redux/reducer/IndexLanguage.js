const InduxLanguage = (state=0,action)=>{
    switch(action.type){
        case 'INDUXLANGUAGE':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxLanguage