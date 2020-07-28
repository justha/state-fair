const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


// event listener to dispatch ride ticket purchased
contentTarget.addEventListener("click", (clickEvent) => {
    const rideEvent = new CustomEvent("rideTicketPurchased")

    eventHub.dispatchEvent(rideEvent)
})


// ride ticket button 
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

