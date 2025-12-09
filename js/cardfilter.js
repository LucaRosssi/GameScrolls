document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".guide-card-popular"); // Select all guide cards
    const container = document.querySelector(".popular-guides"); // Container for the cards
    const originalCards = [...cards]; // Store the original order of cards
    const searchInput = document.getElementById("search-input"); // Search input field

    // Function to filter cards by console type
    function filterByConsola(consola) { 
        cards.forEach(card => {
            const match = card.dataset.consola === consola;
            card.style.display = match ? "block" : "none";
        });
    }

    // Function to sort cards alphabetically
    function sortCards(asc = true) {
        const sorted = [...cards].sort((a, b) => {
            const titleA = a.querySelector("p").textContent.toLowerCase();
            const titleB = b.querySelector("p").textContent.toLowerCase();
            return asc ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
        });
        sorted.forEach(card => container.appendChild(card));
    }

    // Function to restore the original order of cards
    function restoreOriginalOrder() {
        originalCards.forEach(card => container.appendChild(card));
    }

    // Event listeners for buttons and search input
    document.querySelector(".btn-container").addEventListener("click", e => {
        if (!e.target.classList.contains("btn2")) return; // Ensure the clicked element is a button
        const text = e.target.textContent.toLowerCase(); // Get the text of the clicked button

        switch (text) {
            case "ps2":
                filterByConsola("ps2");
                break;
            case "ps3":
                filterByConsola("ps3");
                break;
            case "pc":
                filterByConsola("pc");
                break;
            case "a-z":
                sortCards(true);
                break;
            case "z-a":
                sortCards(false);
                break;
            case "limpiar filtros":
                searchInput.value = "";
                cards.forEach(card => card.style.display = "block");
                restoreOriginalOrder();
                break;
        }
    });

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector("p").textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? "block" : "none";
        });
    });
});