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
