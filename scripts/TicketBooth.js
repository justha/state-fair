const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


// event listener to dispatch ride ticket purchased
contentTarget.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("ride")){
        const ridePurchaseEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(ridePurchaseEvent)        
    }
})

// ride ticket button 
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">Ticket Booth<br>
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}