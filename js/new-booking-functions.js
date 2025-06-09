document.getElementById("search-text").addEventListener("search", handleSearch);

function handleSearch(event) {
    event.preventDefault();
    const value = document.getElementById('search-text').value.trim();
    //Add logic
    if (value) {
        console.log('Ricerca:', value);
        // Aggiungi qui la logica di ricerca
    }
}

export function enableContinueButton(selection) {
    const button = document.getElementById('continue-button');

    if (button.disabled) document.getElementById('continue-button').disabled = !selection;
}

window.handleContinue = function (pageUrl) {
    /**
    const selectedCard = document.querySelector('.performance-card-selected');
    if (selectedCard) {
        const id = selectedCard.getAttribute('data-id');
        localStorage.setItem('performance', id);
    }
     **/
    window.location.href = pageUrl;
};
