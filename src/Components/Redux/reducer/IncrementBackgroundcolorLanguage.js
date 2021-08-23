const IncrementBackgroundColorLanguage = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORLANGUAGE':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorLanguage