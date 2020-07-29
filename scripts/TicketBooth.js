const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


// event listener to dispatch ticket purchased message for color boxes/tallies
contentTarget.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("full")){
        const fullPurchaseEvent = new CustomEvent("fullPackagePurchased")
        eventHub.dispatchEvent(fullPurchaseEvent)        
        } 
        else if (clickEvent.target.id.startsWith("ride")){
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
        else if (clickEvent.target.id.startsWith("sideshow")){
            const sideshowPurchaseEvent = new CustomEvent("sideshowTicketPurchased")
            eventHub.dispatchEvent(sideshowPurchaseEvent)        
            }
})


// event listener to dispatch ticket purchased message for color boxes/tallies
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("full")){
    const fullPurchaseEvent = new CustomEvent("packageCount")
    eventHub.dispatchEvent(fullPurchaseEvent)        
    } 
    else if (clickEvent.target.id.startsWith("ride") || 
            clickEvent.target.id.startsWith("food") || 
            clickEvent.target.id.startsWith("game") || 
            clickEvent.target.id.startsWith("sideshow"))
                {
                const ridePurchaseEvent = new CustomEvent("ticketCount")
                eventHub.dispatchEvent(ridePurchaseEvent)        
                }
})


// ticket buttons
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">Ticket Booth<br>
            <button id="rideTicket">Ride</button>
            <button id="foodTicket">Food</button>
            <button id="gameTicket">Game</button>
            <button id="sideshowTicket">Sideshow</button>
            <button id="fullPackage">Full Package</button>
        </div>
    `
}