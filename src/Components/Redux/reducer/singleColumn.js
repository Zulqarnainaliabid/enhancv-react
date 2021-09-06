const SingleColumnTemplate = (state=false,action)=>{
    switch(action.type){
        case 'SINGLECOLUMN':
            return state = action.payload;
        default:
            return state;
    }
}
export default SingleColumnTemplate