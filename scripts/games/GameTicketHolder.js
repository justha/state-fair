const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person player">1</div>
        `            
    })
    eventHub.addEventListener("fullTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person bigSpender">1</div>
        `            
    })
}