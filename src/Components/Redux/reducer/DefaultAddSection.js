const DefaultAddSection = (state=false,action)=>{
    switch(action.type){
        case 'DEDAULTADDSECTION':
            let addDefaultSection={
                name:action.payload,
                toggle:action.toggle
            }
            return state = addDefaultSection
         default:
            return state;
    }
}
export default DefaultAddSection