const InduxTechstock = (state=0,action)=>{
    switch(action.type){
        case 'INDUXTECKSTOCK':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxTechstock