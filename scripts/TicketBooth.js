const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


// event listener to dispatch ride ticket purchased
contentTarget.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("ride")){
        const ridePurchaseEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(ridePurchaseEvent)        
        } 
        else if (clickEvent.target.id.startsWith("food")){
            const foodPurchaseEvent = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(foodPurchaseEvent)        
            }
            else if (clickEvent.target.id.startsWith("game")){
                const gamePurchaseEvent = new CustomEvent("gameTicketPurchased")
                eventHub.dispatchEvent(gamePurchaseEvent)        
                }
})

// ride ticket button 
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">Ticket Booth<br>
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}