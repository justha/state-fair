const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person rider">1</div>
        `            
    })
    eventHub.addEventListener("fullTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person bigSpender">1</div>
        `            
    })
}