const IncrementBackgroundColorMyTime = (state=0,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLOMYTIME':
            return state+1;
        default:
            return state;
    }
}
export default IncrementBackgroundColorMyTime