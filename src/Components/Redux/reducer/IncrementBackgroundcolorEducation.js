const IncrementBackgroundColorEducation = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLOREDUCATION':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorEducation