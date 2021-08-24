const TechstockYes = (state=0,action)=>{
    switch(action.type){
        case 'TECHSTOCKYES':
            return state = action.payload
         default:
            return state;
    }
}
export default TechstockYes