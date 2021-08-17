const Section = (state=null,action)=>{
    switch(action.type){
        case 'UPDATESECTIONARRAY':
            return state = action.payload;
        default:
            return state;
    }
}
export default Section