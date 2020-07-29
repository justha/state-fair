const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person gawker">1</div>
        `            
    })
    eventHub.addEventListener("fullPackagePurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person bigSpender">1</div>
        `            
    })
}