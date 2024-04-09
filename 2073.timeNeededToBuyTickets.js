var timeRequiredToBuy = function(tickets, k) {
    let timePassed = 0

    boughtLoop:
    while(true) {
        ticketsLoop:
        for(let i = 0; i < tickets.length; i++) {
            if(tickets[i] !== 0) {
                timePassed++
                tickets[i]--
            }
            else if(tickets[i] === 0 && i !== k) {
                continue ticketsLoop
            }

            //check if the "k"th ticket amount has been bought
            if(tickets[k] === 0) {
                break boughtLoop
            }
        }
    }
    return timePassed
};

console.log(timeRequiredToBuy([2,3,2], 2))
console.log(timeRequiredToBuy([5,1,1,1], 0))
