/*

    Sort the observations by type for display and further user sorting.

*/
function sortObservations(){
    
    var sortedObservations = [];

    for (obs in observations){
        if(observations[obs].type == "fed"){
            sortedObservations.push(observations[obs])
        }
    }

    for (obs in observations){
        if(observations[obs].type == "state"){
            sortedObservations.push(observations[obs])
        }
    }

    for (obs in observations){
        if(observations[obs].type == "ANSI"){
            sortedObservations.push(observations[obs])
        }
    }

    for (obs in observations){
        if(observations[obs].type == "textbook"){
            sortedObservations.push(observations[obs])
        }
    }

    for (obs in observations){
        if(observations[obs].type == "observation"){
            sortedObservations.push(observations[obs])
        }
    }

    for (obs in observations){
        if(observations[obs].type == "anecdote"){
            sortedObservations.push(observations[obs])
        }
    }

    return sortedObservations
}