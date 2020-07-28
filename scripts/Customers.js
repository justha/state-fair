const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")


export const totalTicketCount = () => {

    let totalTickets = 0

    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        totalTickets += 1    
        contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}` 
    })
    

}
