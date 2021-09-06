const BackgroundColorDatePickerVolunteering= (state=false,action)=>{
    switch(action.type){
        case 'BACKGROUNDCOLORDATPICKPVOLUNTEERING':
            return state = action.payload
         default:
            return state;
    }
}
export default BackgroundColorDatePickerVolunteering