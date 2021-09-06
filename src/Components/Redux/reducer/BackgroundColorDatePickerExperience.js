const BackgroundColorDatePickerExperience = (state=false,action)=>{
    switch(action.type){
        case 'BACKGROUNDCOLORDATPICKEREXPERIENCE':
            return state = action.payload
         default:
            return state;
    }
}
export default BackgroundColorDatePickerExperience