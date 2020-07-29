const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let totalTickets = 0
contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}` 


export const totalTicketCount = () => {
    eventHub.addEventListener("packageCount", customEvent => {
        totalTickets += 4    
        contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}` 
    })
      eventHub.addEventListener("ticketCount", customEvent => {
        totalTickets += 1    
        contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}` 
    })
}



