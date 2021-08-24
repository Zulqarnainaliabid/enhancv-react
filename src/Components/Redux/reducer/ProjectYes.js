const ProjectYes = (state=0,action)=>{
    switch(action.type){
        case 'PROJECTYES':
            return state = action.payload
         default:
            return state;
    }
}
export default ProjectYes