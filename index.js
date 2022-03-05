const washBtn = document.getElementById("wash-btn")
const invoiceDetail = document.getElementById("invoice-detail")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const invoicetotal = document.getElementById("invoice-total")
const sendBtn = document.getElementById("sendBtn")

let items = [
    {
        elementId: "item1",
        descr: "Wash Car",
        price: 10,
        buttonId: "wash-btn"
    },
    {
        elementId: "item2",
        descr: "Mow Lawn",
        price: 20,
        buttonId: "mow-btn"
    },
    {
        elementId: "item3",
        descr: "Pull Weeds",
        price: 30,
        buttonId: "pull-btn"
    }

]

let total = 0

washBtn.addEventListener("click", function() {
    displayItem(items[0])
})

mowBtn.addEventListener("click", function() {
    displayItem(items[1])
})

pullBtn.addEventListener("click", function() {
    displayItem(items[2])
})

sendBtn.addEventListener("click", function() {
    invoiceDetail.textContent = ""
    invoicetotal.textContent = "$0"
    total = 0
    pullBtn.disabled = false;
    mowBtn.disabled  = false;
    washBtn.disabled = false;
})

function displayItem(item) {
    total += item.price
    invoiceDetail.innerHTML += `
        <div id=${item.elementId} class="detail item">
            <p>${item.descr} <span class="remove-item" onClick="removeItem(${JSON.stringify(item).split('"').join("&quot;")})">remove</span></p>
            <p><span class="dollar-sign">$</span>${item.price}</p>
        </div>
    `
    invoicetotal.textContent = `$${total}`
    document.getElementById(item.buttonId).disabled = true;
}


function removeItem(item) {    
    document.getElementById(item.elementId).remove()
    document.getElementById(item.buttonId).disabled = false;

    total -= item.price
    invoicetotal.textContent = `$${total}`
}