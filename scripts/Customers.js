const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")


export const totalTicketCount = () => {
    let totalTicketsState = 0
    contentTarget.innerHTML = `Total tickets purchased: ${totalTicketsState}`
}
