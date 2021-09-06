const BackgroundColorDatePicker = (state=false,action)=>{
    switch(action.type){
        case 'BACKGROUNDCOLORDATPICKER':
            return state = action.payload
         default:
            return state;
    }
}
export default BackgroundColorDatePicker