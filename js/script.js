// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign button
const assignButton = document.querySelector(".assign");
// list of assigned items
const assignedItems = document.querySelector(".assigned-items");

const addGuestButtonOnClickHandler = function () {

    const guest = guestInput.value;
    //console.log(guest);
    if (guest !== "" && Number(guestCount.innerText) < 8) {
        addToList(guest);
        updateGuestCount();
        clearInput();

    }
}

addGuestButton.addEventListener("click", addGuestButtonOnClickHandler)

guestInput.addEventListener("keydown", function (e) {
    if (guestInput.value != "") {
        if (e.key === "Enter")
            addGuestButtonOnClickHandler();
    }

})

const clearInput = function () {
    guestInput.value = "";
}

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.appendChild(listItem);
}

const updateGuestCount = function () {

    guestCount.innerText = Number(guestCount.innerText) + 1;
    if (Number(guestCount.innerText) == 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        if (guestFull.classList.contains("hide"))
            guestFull.classList.remove("hide");
    }

}

const assignItems = function () {
    const potluckItems = ["Chicken Ceaser Salad", "Fruit Salad", "Tzatziki Bowl", "Souvlaki Skewers", "Kofta Skewers", "Hummus", "Peri Peri Chicken", "Tabboula Salad"];
    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests) {
        let potluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPutluckItem = potluckItems[potluckIndex];
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPutluckItem}`;
        assignedItems.append(listItem);
        potluckItems.splice(potluckIndex, 1);
    };
}

assignButton.addEventListener("click", function () {
    assignItems();
})