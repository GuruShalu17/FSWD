const initalState=0;


const stepsToChangeNum=(state=initalState,action)=>{

    switch(action.type){
        case "INCREASE": return state+1
        case "DECREASE": return state-1
        default:return state
    }
   
}

export default stepsToChangeNum;