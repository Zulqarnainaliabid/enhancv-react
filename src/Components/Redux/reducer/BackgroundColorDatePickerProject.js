const BackgroundColorDatePickerProject = (state=false,action)=>{
    switch(action.type){
        case 'BACKGROUNDCOLORDATPICKPROJECT':
            return state = action.payload
         default:
            return state;
    }
}
export default BackgroundColorDatePickerProject