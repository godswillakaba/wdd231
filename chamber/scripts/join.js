const timestampField = document.querySelector("#timestamp");

const now = new Date();

timestampField.value = now.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
});


const modals = {
    np: document.querySelector("#npModal"),
    bronze: document.querySelector("#bronzeModal"),
    silver: document.querySelector("#silverModal"),
    gold: document.querySelector("#goldModal")
};

const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const membershipLevel = button.dataset.level;

        modals[membershipLevel].showModal();
    });
});


const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});


Object.values(modals).forEach(modal => {
    modal.addEventListener("click", (event) => {
        const rect = modal.getBoundingClientRect();

        const clickedOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

        if (clickedOutside) {
            modal.close();
        }
    });
});