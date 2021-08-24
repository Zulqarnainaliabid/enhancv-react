const LanguageYes = (state=0,action)=>{
    switch(action.type){
        case 'LANGUAGEYES':
            return state = action.payload
         default:
            return state;
    }
}
export default LanguageYes