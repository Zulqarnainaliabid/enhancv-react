const InduxStrength = (state=0,action)=>{
    switch(action.type){
        case 'INDUXSTRENGTH':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxStrength