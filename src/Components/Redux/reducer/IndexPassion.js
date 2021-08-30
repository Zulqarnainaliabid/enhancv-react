const InduxPassion = (state=0,action)=>{
    switch(action.type){
        case 'INDUXPASSION':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxPassion