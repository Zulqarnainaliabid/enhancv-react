const Achievementyes = (state=0,action)=>{
    switch(action.type){
        case 'ACHIEVEMENTYES':
            return state = action.payload
         default:
            return state;
    }
}
export default Achievementyes