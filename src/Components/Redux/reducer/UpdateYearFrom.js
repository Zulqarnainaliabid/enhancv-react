const UpdateYearFrom = (state=0,action)=>{
    switch(action.type){
        case 'UPDATEYEARFROM':
            return state = action.payload;
        default:
            return state;
    }
}
export default UpdateYearFrom