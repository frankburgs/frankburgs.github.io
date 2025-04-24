/*
    Sorts the observations by type for table display.
    Convert to elseif 
*/
const sortObservations = function (myArray){
    
    var sortedObservations = [];

    for (let obs in myArray){
        if(myArray[obs].authType == "osha"){

            sortedObservations.push(myArray[obs])
        }
    }

    for (let obs in myArray){
        if(myArray[obs].authType == "state"){
            sortedObservations.push(myArray[obs])
        }
    }

    for (let obs in myArray){
        if(myArray[obs].authType == "ANSI"){
            sortedObservations.push(myArray[obs])
        }
    }

    for (let obs in myArray){
        if(myArray[obs].authType == "textbook"){
            sortedObservations.push(myArray[obs])
        }
    }

    for (let obs in myArray){
        if(myArray[obs].authType == "observation"){
            sortedObservations.push(myArray[obs])
        }
    }

    for (let obs in myArray){
        if(myArray[obs].authType == "anecdote"){
            sortedObservations.push(myArray[obs])
        }
    }
    return sortedObservations
}
export default sortObservations;
