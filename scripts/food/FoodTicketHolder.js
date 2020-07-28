const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person eater">1</div>
        `            
    })
    eventHub.addEventListener("fullTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person bigSpender">1</div>
        `            
    })
}